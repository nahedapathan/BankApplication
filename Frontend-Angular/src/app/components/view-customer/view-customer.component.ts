import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent {

  constructor(private s : CustomerService){}

  customer:any

  ngOnInit()
  {
    this.getCustomer()
  }

  getCustomer()
  {
    this.s.getCustomer().subscribe({
      next:(res)=>{
         this.customer=res
         console.log(res)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  deleteHandler(accNo:any)
  {
    this.s.deleteCustomer(accNo).subscribe(()=>{
      this.getCustomer()
    })
  }
}
