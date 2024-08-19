import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(private empService: EmpService, private router: Router) { }

  ngOnInit(): void {
    this.empService.getProfileData().subscribe((data) => {
      this.profileData = data;
    });
  }

  deleteEmployee(id: number): void {
    this.empService.deleteEmployee(id).subscribe(() => {
      this.profileData = this.profileData.filter((employee: any) => employee.id !== id);
    });
  }

  editEmployee(id: number): void {
    this.router.navigate(['/edit', id]); 
  }
}
