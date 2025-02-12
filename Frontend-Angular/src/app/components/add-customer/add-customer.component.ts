import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

   customer={
    accHolderName:"",
    accphone:"",
    accbalance:"",
    accpin:""
   }

   constructor(private s:CustomerService,private r:Router){}

   submitHandler()
   {
    this.s.addCustomer(this.customer).subscribe({
      next:()=>{
        this.r.navigate(['/view-customers'])
        alert("Customer Added Successfully....");
  },
  error:(error:any)=>{
    console.log(error);
    
  }
    })
   }

}
