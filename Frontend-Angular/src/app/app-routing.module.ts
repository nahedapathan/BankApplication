import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { EmployeeAuthGuard } from './guards/employee-auth-guard.guard';
import { CustomerAuthGuard } from './guards/customer-auth-guard.guard';
import { DepositComponent } from './components/deposit/deposit.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { UpdatePinComponent } from './components/update-pin/update-pin.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [

  {
    path:'',component:HomeComponent
  },
  {
    path:'employee-login',component:EmployeeLoginComponent
  },
  {
    path:'customer-login',component:CustomerLoginComponent
  },
  {
    path:'employee-dashboard',component:EmployeeDashboardComponent
  },
  {
    path:'customer-dashboard',component:CustomerDashboardComponent
  },
  {
    path:'add-customer',component:AddCustomerComponent
  },
  {
    path:'view-customers',component:ViewCustomerComponent
  },
  {
    path:'update-customer/:accNo',component:UpdateCustomerComponent
  },
  { 
    path: 'profile', component: ProfileComponent 
  },
  {
    path:'add-employee',component:AddEmployeeComponent
  },
  {
    path:'view-employee',component:ViewEmployeeComponent
  },
  {
    path:'update-employee/:id',component:UpdateEmployeeComponent
  },
  {
    path:'admin-login',component:AdminLoginComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminAuthGuard] 
  },
  {
    path: 'employee-dashboard',
    component: EmployeeDashboardComponent,
    canActivate: [EmployeeAuthGuard]  // ✅ Protect Employee Dashboard
  },
  {
    path: 'customer-dashboard',
    component: CustomerDashboardComponent,
    canActivate: [CustomerAuthGuard]  // ✅ Protect Customer Dashboard
  },
  { path: 'deposit', component: DepositComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'update-pin', component: UpdatePinComponent },
  {
    path:'**' ,redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
