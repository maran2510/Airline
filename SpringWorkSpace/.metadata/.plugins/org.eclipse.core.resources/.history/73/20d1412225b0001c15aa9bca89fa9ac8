package com.lti.AirlineReservationSystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.AirlineReservationSystem.beans.Transaction;

import com.lti.AirlineReservationSystem.dao.TransactionDao;
@Service("TransactionService")
public class TransactionServiceImpl implements TransactionService {
	@Autowired
	TransactionDao dao;
	

	public TransactionDao getDao() {
		return dao;
	}


	public void setDao(TransactionDao dao) {
		this.dao = dao;
	}


	@Override
	public int addTransaction(Transaction t) {
		int TrId = dao.addTransaction(t);
		return TrId;
		
	}


	@Override
	public List<Transaction> listAllTransaction() {
		System.out.println("service layer");
		List<Transaction> TrasnList = dao.listAllTransaction();
		return TrasnList;
	}


	@Override
	public Transaction findTransactionId(int Trans_id) {
		return dao.findTransactionId(Trans_id);
	}


	

}
