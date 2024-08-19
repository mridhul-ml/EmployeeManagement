import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpService } from 'src/app/services/emp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm!: FormGroup;
  employeeId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private empService: EmpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the employee ID from the route parameters
    this.employeeId = this.route.snapshot.paramMap.get('id');
    
    // Initialize the form with empty values
    this.initializeForm();

    // If an employee ID is present, fetch the employee data
    if (this.employeeId) {
      this.empService.getProfileData().subscribe((data) => {
        const employee = data.find((emp: { id: string | null; }) => emp.id === this.employeeId);
        if (employee) {
          this.editForm.patchValue(employee);
        }
      });
    }
  }

  // Initialize the reactive form
  initializeForm(): void {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      designation: ['', Validators.required],
    });
  }

  // Save the updated employee data
  save(): void {
    if (this.editForm.valid && this.employeeId) {
      this.empService.editEmployee(this.employeeId, this.editForm.value).subscribe(
        () => {
          console.log('Employee updated successfully');
          this.router.navigate(['/home/profile']);
        },
        (error) => {
          console.error('Error updating employee:', error);
        }
      );
    }
  }
}
