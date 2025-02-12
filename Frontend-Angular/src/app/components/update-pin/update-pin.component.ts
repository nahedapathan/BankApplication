import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-pin',
  templateUrl: './update-pin.component.html',
  styleUrls: ['./update-pin.component.css']
})
export class UpdatePinComponent {
  accNo: number = Number(localStorage.getItem('customerAccNo'));
  newPin: number = 0;
  message: string = '';

  constructor(private customerService: CustomerService) {}

  updatePin() {
    if (this.newPin.toString().length !== 4) {
      this.message = 'PIN must be exactly 4 digits!';
      return;
    }

    this.customerService.updatePin(this.accNo, this.newPin).subscribe({
      next: () => {
        this.message = 'PIN updated successfully!';
        this.newPin = 0;
      },
      error: () => {
        this.message = 'Failed to update PIN. Try again!';
      }
    });
  }
}
