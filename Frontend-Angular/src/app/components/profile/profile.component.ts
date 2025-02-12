import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  customer: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    const accNo = localStorage.getItem('customerAccNo');  // Retrieve stored account number
    if (accNo) {
      this.customerService.getCustomerByAccNo(accNo).subscribe(data => {
        this.customer = data;
      });
    }
  }
  
}
