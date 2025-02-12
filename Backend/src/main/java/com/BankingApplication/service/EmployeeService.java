package com.BankingApplication.service;

import java.util.List;

import com.BankingApplication.model.EmployeeAccount;

public interface EmployeeService {

	public EmployeeAccount createEmployee(EmployeeAccount employee);
	
	public List<EmployeeAccount> getAllEmployees();
	
	public EmployeeAccount updateEmployee(Long id,EmployeeAccount updatedEmployee);
	
	public void deleteEmployee(Long id);
	
	public EmployeeAccount getEmployeeById(Long id); 
	
	public boolean authenticateEmployee(String username, String password);
}
