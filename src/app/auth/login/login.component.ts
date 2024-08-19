import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private empService: EmpService, private router: Router) {}

  login() {
    if (this.empService.login(this.username, this.password)) {
      this.router.navigate(['/home/profile']);
    } else {
      alert('Login failed');
    }
  }
}
