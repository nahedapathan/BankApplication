package com.BankingApplication.service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BankingApplication.model.EmployeeAccount;
import com.BankingApplication.repository.EmployeeRepository;
@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	@Override
	public EmployeeAccount createEmployee(EmployeeAccount employee) {
		
		return employeeRepository.save(employee);
	}

	@Override
	public List<EmployeeAccount> getAllEmployees() {
		
		return employeeRepository.findAll();
	}

	@Override
	public EmployeeAccount updateEmployee(Long id, EmployeeAccount updatedEmployee) {
		Optional<EmployeeAccount> existingEmployee=employeeRepository.findById(id);
		
		if(existingEmployee.isPresent())
		{
			EmployeeAccount employee=existingEmployee.get();
			employee.setName(updatedEmployee.getName());
			employee.setPosition(updatedEmployee.getPosition());
			employee.setSalary(updatedEmployee.getSalary());
			employee.setUsername(updatedEmployee.getUsername());
			employee.setPassword(updatedEmployee.getPassword());
			
			return employeeRepository.save(employee);
		}else {
            throw new RuntimeException("Employee not found");
        }
	}

	@Override
	public void deleteEmployee(Long id) {
		employeeRepository.deleteById(id);
	}

	public EmployeeAccount getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
    }

	@Override
	public boolean authenticateEmployee(String username, String password) {
		Optional<EmployeeAccount> employee = employeeRepository.findByUsernameAndPassword(username, password);
        return employee.isPresent();
	}
}
