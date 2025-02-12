import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee={
      name:"",
      position:"",
      salary:"",
      username:"",
      password:""
     }
  
     constructor(private s:EmployeeService,private r:Router){}
  
     submitHandler()
     {
      this.s.addEmployee(this.employee).subscribe({
        next:()=>{
          this.r.navigate(['/view-employee'])
          alert("Employee Added Successfully....");
    },
    error:(error:any)=>{
      console.log(error);
      
    }
      })
     }
}
