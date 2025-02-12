import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  accNo: number | null = null;
  accPin: number | null = null;
  error: string = '';

  constructor(private customerService: CustomerService, private router: Router) {}

  login() {
    if (this.accNo === null || this.accPin === null) {
      this.error = 'Please enter Account Number and PIN.';
      return;
    }
  
    this.customerService.customerLogin(this.accNo, this.accPin).subscribe({
      next: (res: any) => {
        if (res && this.accNo !== null) {
          localStorage.setItem('customerAccNo', String(this.accNo)); // ✅ Ensure it's not null before storing
          this.router.navigate(['/customer-dashboard']);
        }
      },
      error: () => {
        this.error = 'Wrong Account Number or PIN';
      }
    });
  }
  
}
