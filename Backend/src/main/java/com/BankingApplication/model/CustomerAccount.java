package com.BankingApplication.model;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Table(name="cust_Account")
public class CustomerAccount {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="acc_no")
	private Long accNo;
	
	@Column(name="acc_holdername")
	private String accHolderName;
	
	@Column(name="acc_phone")
	private long accphone;
	
	@Column(name="acc_balance")
	private double accbalance;
	
	@Column(name="acc_pin")
	private int accpin;
	
}
