package com.BankingApplication.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BankingApplication.model.CustomerAccount;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerAccount, Long>{

	Optional<CustomerAccount> findByAccNoAndAccpin(Long accNo, int accpin); 
}
