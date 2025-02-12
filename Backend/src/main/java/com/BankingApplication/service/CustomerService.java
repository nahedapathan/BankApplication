package com.BankingApplication.service;


import java.util.List;

import com.BankingApplication.model.CustomerAccount;

public interface CustomerService {

	public CustomerAccount createCustomerAccount(CustomerAccount account);
	
	public List<CustomerAccount> getAllCustomers();
	
	public CustomerAccount updateCustomerAccount(Long accNo,CustomerAccount updatedAccount);
	
	public String deleteCustomerAccount(Long accNo);
	
	public CustomerAccount searchByAccountNo(Long accNo);
	
	public boolean authenticateCustomer(Long accNo, int accpin);
	
	
	 void deposit(Long accNo, double amount);
	 void transfer(Long fromAccNo, Long toAccNo, double amount);
	 void updatePin(Long accNo, int newPin);
}
