package com.BankingApplication.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BankingApplication.model.CustomerAccount;
import com.BankingApplication.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	
	@Override
	public CustomerAccount createCustomerAccount(CustomerAccount account) {
		
		return customerRepository.save(account);
	}


	@Override
	public List<CustomerAccount> getAllCustomers() {
		
		return customerRepository.findAll();
	}


	@Override
	public CustomerAccount updateCustomerAccount(Long accNo, CustomerAccount updatedAccount) {
		Optional<CustomerAccount> existingAccount=customerRepository.findById(accNo);
		
		if(existingAccount.isPresent())
		{
			CustomerAccount account=existingAccount.get();
			account.setAccHolderName(updatedAccount.getAccHolderName());
			account.setAccphone(updatedAccount.getAccphone());
			account.setAccbalance(updatedAccount.getAccbalance());
			account.setAccpin(updatedAccount.getAccpin());
			
			return customerRepository.save(account);
		}
		else
		{
			throw new RuntimeException("Account not found with Account No :"+accNo);
		}
	}


	@Override
	public String deleteCustomerAccount(Long accNo) {
		Optional<CustomerAccount> existingAccount=customerRepository.findById(accNo);
		
		if(existingAccount.isPresent())
		{
			customerRepository.deleteById(accNo);
			return "Account with Account No "+accNo+" deleted successfully!";
		}
		else
		{
			throw new RuntimeException("Account not found with Account No :"+accNo);
		}
	}


	@Override
	public CustomerAccount searchByAccountNo(Long accNo) {
		
		return customerRepository.findById(accNo).orElseThrow(()->new RuntimeException("Account not Found with Account No: "+accNo));
	}


	@Override
	public boolean authenticateCustomer(Long accNo, int accpin) {
		 Optional<CustomerAccount> customer = customerRepository.findByAccNoAndAccpin(accNo, accpin);
	     return customer.isPresent();
	}


	@Override
	public void deposit(Long accNo, double amount) {
		CustomerAccount customer = searchByAccountNo(accNo);
        customer.setAccbalance(customer.getAccbalance() + amount);
        customerRepository.save(customer);
	}


	@Override
	public void transfer(Long fromAccNo, Long toAccNo, double amount) {
		CustomerAccount sender = searchByAccountNo(fromAccNo);
        CustomerAccount receiver = searchByAccountNo(toAccNo);

        if (sender.getAccbalance() >= amount) {
            sender.setAccbalance(sender.getAccbalance() - amount);
            receiver.setAccbalance(receiver.getAccbalance() + amount);
            customerRepository.save(sender);
            customerRepository.save(receiver);
        } else {
            throw new RuntimeException("Insufficient balance for transaction.");
        }
	}


	@Override
	public void updatePin(Long accNo, int newPin) {
		CustomerAccount customer = searchByAccountNo(accNo);
        customer.setAccpin(newPin);
        customerRepository.save(customer);
	}

}
