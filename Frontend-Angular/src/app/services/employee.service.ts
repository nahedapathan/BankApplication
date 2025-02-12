import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 
    apiUrl="http://localhost:8080"
  
    constructor(private http:HttpClient) { }
  
    
    getEmployee()
    {
      return this.http.get(`${this.apiUrl}/api/employees/all`)
    }
  
    addEmployee(employee:any):Observable<any>
    {
      return this.http.post(`${this.apiUrl}/api/employees/create`,employee)
    }
  
    deleteEmployee(id:any)
    {
      return this.http.delete(`${this.apiUrl}/api/employees/delete/${id}`,{responseType:'text'})
    }

    updateEmployee(id:any,employee:any)
  {
    return this.http.put(`${this.apiUrl}/api/employees/update/${id}`,employee)
  }

  getEmployeeByid(id:any)
  {
    return this.http.get(`${this.apiUrl}/api/employees/getbyId/${id}`)
  }
}
