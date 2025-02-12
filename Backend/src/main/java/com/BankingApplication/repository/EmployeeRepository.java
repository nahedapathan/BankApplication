package com.BankingApplication.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BankingApplication.model.EmployeeAccount;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeAccount, Long> {
	Optional<EmployeeAccount> findByUsernameAndPassword(String username, String password);
}
