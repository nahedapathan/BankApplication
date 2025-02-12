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

import com.BankingApplication.model.EmployeeAccount;
import com.BankingApplication.service.EmployeeService;


@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("/create")
	public EmployeeAccount createEmployee(@RequestBody EmployeeAccount account)
	{
		return employeeService.createEmployee(account);
	}
	
	@GetMapping("/all")
	public List<EmployeeAccount> getAllEmployees()
	{
		return employeeService.getAllEmployees();
	}
	
	@PutMapping("/update/{id}")
	public EmployeeAccount updateEmployee(@PathVariable Long id,@RequestBody EmployeeAccount updatedEmployee)
	{
		return employeeService.updateEmployee(id, updatedEmployee);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteEmployee(@PathVariable Long id)
	{
		employeeService.deleteEmployee(id);
	}
	
	@GetMapping("/getbyId/{id}")
    public EmployeeAccount getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }
	
	@PostMapping("/login")
    public ResponseEntity<?> employeeLogin(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        if (employeeService.authenticateEmployee(username, password)) {
            return ResponseEntity.ok(Map.of("message", "Login successful"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "No username and password are valid"));
        }
    }
}
















