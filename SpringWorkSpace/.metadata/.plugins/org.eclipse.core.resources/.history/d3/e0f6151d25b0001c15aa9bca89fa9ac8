package com.lti.AirlineReservationSystem.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.AirlineReservationSystem.beans.Transaction;

@Repository
public class TransactionDaoImpl implements  TransactionDao {
	
	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public int addTransaction(Transaction t) {
	em.persist(t);
		return t.getTrId();
	}

	@Override
	public List<Transaction> listAllTransaction() {
		String sql= "Select t From Transaction t";
		Query qry=em.createQuery(sql);
		List<Transaction>TransList=qry.getResultList();
		System.out.println("on db server"+TransList);
		return TransList;
	}

	@Override
	public Transaction findTransactionId(int Trans_id) {
		
		System.out.println("*Found*");
		Transaction a=em.find(Transaction.class,Trans_id);
		return a;
	}

	
	
	
	
	
	

}
