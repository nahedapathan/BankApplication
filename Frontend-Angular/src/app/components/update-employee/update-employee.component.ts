import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

    newId:any
    employee:any
  
    constructor(private activateRoute:ActivatedRoute,private s:EmployeeService,private r:Router){}
  
    ngOnInit()
    {
      this.newId=Number(this.activateRoute.snapshot.paramMap.get('id'))
  
      this.s.getEmployeeByid(this.newId).subscribe((res)=>{
        this.employee=res
      })
    }
  
    updateEmployee()
    {
      this.s.updateEmployee(this.newId,this.employee).subscribe(()=>{
        alert("Employee Updated Successfully..........")
        this.r.navigate(['/view-employee'])
      })
    }
}
