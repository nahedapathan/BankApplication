import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {

  newaccNo:any
  customer:any

  constructor(private activateRoute:ActivatedRoute,private s:CustomerService,private r:Router){}

  ngOnInit()
  {
    this.newaccNo=Number(this.activateRoute.snapshot.paramMap.get('accNo'))

    this.s.getCustomerByAccNo(this.newaccNo).subscribe((res)=>{
      this.customer=res
    })
  }

  updateCustomer()
  {
    this.s.updateCustomer(this.newaccNo,this.customer).subscribe(()=>{
      alert("Customer Updated Successfully..........")
      this.r.navigate(['/view-customers'])
    })
  }

}
