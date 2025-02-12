import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  accNo: number = 0;  // ✅ Store customer account number
  customer: any = {}; // ✅ Store customer details

  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit() {
    const storedAccNo = localStorage.getItem('customerAccNo');

    if (storedAccNo) {
      this.accNo = Number(storedAccNo);

      // ✅ Fetch customer details using accNo
      this.customerService.getCustomerByAccNo(this.accNo).subscribe({
        next: (res) => {
          this.customer = res;
        },
        error: () => {
          alert('Error fetching customer details!'); // Show error if data not found
        }
      });
    } else {
      this.router.navigate(['/customer-login']); // Redirect to login if accNo not found
    }
  }

  logout() {
    localStorage.removeItem('customerAccNo'); // ✅ Clear session
    this.router.navigate(['/customer-login']).then(() => {
      window.location.reload(); // ✅ Prevents back navigation
    });
  }
}
