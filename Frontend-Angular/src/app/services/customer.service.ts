import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="http://localhost:8080"

  constructor(private http:HttpClient) { }

  
  getCustomer()
  {
    return this.http.get(`${this.apiUrl}/api/customers/all`)
  }

  addCustomer(customer:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/api/customers/create`,customer)
  }

  deleteCustomer(accNo:any)
  {
    return this.http.delete(`${this.apiUrl}/api/customers/delete/${accNo}`,{responseType:'text'})
  }

  updateCustomer(accNo:any,customer:any)
  {
    return this.http.put(`${this.apiUrl}/api/customers/update/${accNo}`,customer);
  }

  getCustomerByAccNo(accNo:any)
  {
    return this.http.get(`${this.apiUrl}/api/customers/getbyId/${accNo}`)
  }
  
  deposit(accNo: number, amount: number) {
    return this.http.post(`${this.apiUrl}/api/customers/deposit`, { accNo, amount });
  }
  

  transfer(fromAccNo: any, toAccNo: any, amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/customers/transfer`, { fromAccNo, toAccNo, amount });
  }

  updatePin(accNo: any, newPin: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/customers/update-pin`, { accNo, newPin });
  }

  customerLogin(accNo: number, accPin: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/customers/login`, { accNo, accPin });
  }
}
