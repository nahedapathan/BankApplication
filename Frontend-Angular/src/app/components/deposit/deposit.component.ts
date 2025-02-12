import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  accNo: number | null = null; // Store account number safely
  depositAmount: number = 0;
  message: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    // ✅ Fetch account number from localStorage
    const storedAccNo = localStorage.getItem('customerAccNo');
    if (storedAccNo) {
      this.accNo = Number(storedAccNo);
    } else {
      this.message = "Error: No account number found!";
    }
  }

  deposit() {
    if (!this.accNo) {
      this.message = "Error: No account number found!";
      return;
    }

    if (this.depositAmount <= 0) {
      this.message = 'Enter a valid amount!';
      return;
    }

    this.customerService.deposit(this.accNo, this.depositAmount).subscribe({
      next: () => {
        this.message = `Successfully deposited Rs.${this.depositAmount}`;
        this.depositAmount = 0;
      },
      error: () => {
        this.message = 'Deposit failed. Please try again.';
      }
    });
  }
}
