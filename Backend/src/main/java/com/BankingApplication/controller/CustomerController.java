package com.BankingApplication.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BankingApplication.model.CustomerAccount;
import com.BankingApplication.service.CustomerService;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins="http://localhost:4200")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/create")
	public CustomerAccount createCustomer(@RequestBody CustomerAccount account)
	{
		return customerService.createCustomerAccount(account);
	}
	
	@GetMapping("/all")
	public List<CustomerAccount> getAllCustomer()
	{
		return customerService.getAllCustomers();
	}
	
	@GetMapping("/getbyId/{accNo}")
	public CustomerAccount getCustomerByAccNo(@PathVariable Long accNo)
	{
		return customerService.searchByAccountNo(accNo);
	}
	
	@PutMapping("/update/{accNo}")
	public CustomerAccount updateCustomer(@PathVariable Long accNo,@RequestBody CustomerAccount updateAccount)
	{
		return customerService.updateCustomerAccount(accNo, updateAccount);
	}
	
	@DeleteMapping("/delete/{accNo}")
	public String deleteCustomer(@PathVariable Long accNo)
	{
		return customerService.deleteCustomerAccount(accNo);
	}
	
	@PostMapping("/login")
    public ResponseEntity<?> customerLogin(@RequestBody Map<String, String> credentials) {
        Long accNo = Long.parseLong(credentials.get("accNo"));
        int accPin = Integer.parseInt(credentials.get("accPin"));

        if (customerService.authenticateCustomer(accNo, accPin)) {
            return ResponseEntity.ok(Map.of("message", "Login successful"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Wrong Account Number or PIN"));
        }
    }
	
	@PostMapping("/deposit")
	public ResponseEntity<?> depositAmount(@RequestBody Map<String, String> request) {
	    Long accNo = Long.parseLong(request.get("accNo"));
	    double amount = Double.parseDouble(request.get("amount"));

	    System.out.println("Received Deposit Request - AccNo: " + accNo + ", Amount: " + amount);

	    if (accNo == 0) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", "Invalid Account Number!"));
	    }

	    customerService.deposit(accNo, amount);
	    return ResponseEntity.ok(Map.of("message", "Deposit successful"));
	}


	@PostMapping("/transfer")
	public ResponseEntity<?> transferAmount(@RequestBody Map<String, String> request) {
	    Long fromAccNo = Long.parseLong(request.get("fromAccNo"));
	    Long toAccNo = Long.parseLong(request.get("toAccNo"));
	    double amount = Double.parseDouble(request.get("amount"));

	    customerService.transfer(fromAccNo, toAccNo, amount);
	    return ResponseEntity.ok(Map.of("message", "Transfer successful"));
	}

	@PutMapping("/update-pin")
	public ResponseEntity<?> updatePin(@RequestBody Map<String, String> request) {
	    Long accNo = Long.parseLong(request.get("accNo"));
	    int newPin = Integer.parseInt(request.get("newPin"));

	    customerService.updatePin(accNo, newPin);
	    return ResponseEntity.ok(Map.of("message", "PIN updated successfully"));
	}

	
}














