import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  constructor(private s : EmployeeService){}
  
    employee:any
  
    ngOnInit()
    {
      this.getEmployee();
    }
  
    getEmployee()
    {
      this.s.getEmployee().subscribe({
        next:(res)=>{
           this.employee=res
           console.log(res)
        },
        error:(error)=>{
          console.log(error)
        }
      })
    }
  
    deleteHandler(id:any)
    {
      this.s.deleteEmployee(id).subscribe(()=>{
        this.getEmployee()
      })
    }

}
