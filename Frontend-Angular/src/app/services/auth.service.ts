import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) {}

  // ✅ ADMIN LOGIN
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/perform_login`, { username, password }, { responseType: 'text' });
  }

  isAdminLoggedIn(): boolean {
    return localStorage.getItem('admin') === 'true';
  }

  logout() {
    localStorage.removeItem('admin');
    this.router.navigate(['/admin-login']).then(() => {
      window.location.reload(); // ✅ Prevents back navigation after logout
    });
  }

  // ✅ EMPLOYEE LOGIN
  employeeLogin(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/employees/login`, { username, password });
  }

  isEmployeeLoggedIn(): boolean {
    return localStorage.getItem('employee') === 'true';
  }

  employeeLogout() {
    localStorage.removeItem('employee');
    this.router.navigate(['/employee-login']).then(() => {
      window.location.reload();
    });
  }

  // ✅ CUSTOMER LOGIN
  customerLogin(accNo: string, accPin: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/customers/login`, { accNo, accPin });
  }

  isCustomerLoggedIn(): boolean {
    return localStorage.getItem('customer') === 'true';
  }

  customerLogout() {
    localStorage.removeItem('customer');
    this.router.navigate(['/customer-login']).then(() => {
      window.location.reload();
    });
  }
}
