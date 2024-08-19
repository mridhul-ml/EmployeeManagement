import { Component } from '@angular/core';
import { EmpService } from '../../services/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent {
  employee = {
    name: '',
    email: '',
    department: '',
    designation: ''
  };

  constructor(private empService: EmpService, private router: Router) {}

  addEmployee() {
    this.empService.addEmployee(this.employee).subscribe(
      response => {
        console.log('Employee added successfully', response);
        this.router.navigate(['/home/profile']);
      },
      error => {
        console.error('Error adding employee', error);
        alert('Error adding employee');
      }
    );
  }
}
