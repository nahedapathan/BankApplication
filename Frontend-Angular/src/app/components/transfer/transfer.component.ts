import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  accNo: number = Number(localStorage.getItem('customerAccNo'));
  transferAccNo: number = 0;
  transferAmount: number = 0;
  message: string = '';

  constructor(private customerService: CustomerService) {}

  transfer() {
    if (!this.transferAccNo || this.transferAmount <= 0) {
      this.message = 'Enter valid account number and amount!';
      return;
    }

    this.customerService.transfer(this.accNo, this.transferAccNo, this.transferAmount).subscribe({
      next: () => {
        this.message = `Transferred Rs.${this.transferAmount} to Account No ${this.transferAccNo}`;
        this.transferAccNo = 0;
        this.transferAmount = 0;
      },
      error: () => {
        this.message = 'Transaction failed. Please check details!';
      }
    });
  }
}
