import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private empService: EmpService, private router: Router) {}

  register() {
    this.empService.register(this.username, this.password);
    this.router.navigate(['/auth/login']);
  }
}
