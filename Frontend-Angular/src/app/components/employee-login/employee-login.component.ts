import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.employeeLogin(this.username, this.password).subscribe({
      next: () => {
        localStorage.setItem('employee', 'true');
        this.router.navigate(['/employee-dashboard']);
      },
      error: () => {
        this.error = 'No username and password are valid';
      }
    });
  }
}
