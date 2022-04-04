package com.lti.AirlineReservationSystem.services;

import java.util.List;

import com.lti.AirlineReservationSystem.beans.Transaction;


public interface TransactionService {

	public  int addTransaction(Transaction t);
	public  List<Transaction> listAllTransaction();
	public  Transaction findTransactionId(int Trans_id);
	
}
