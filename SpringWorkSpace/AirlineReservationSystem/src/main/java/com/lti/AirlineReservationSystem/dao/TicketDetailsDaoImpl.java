package com.lti.AirlineReservationSystem.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.AirlineReservationSystem.beans.Admin;
import com.lti.AirlineReservationSystem.beans.TicketDetails;
@Repository
public class TicketDetailsDaoImpl {
	@PersistenceContext
	EntityManager em;
	
	
	@Transactional
	public int addTicketDetails(TicketDetails ticketDetails) {
		// TODO Auto-generated method stub
		em.persist(ticketDetails);
		return ticketDetails.getTicketId();
	
	}

	
	public TicketDetails findTicketById(int ticketId) {
		
		TicketDetails ad = em.find(TicketDetails.class, ticketId);
	  	 return ad;
	}

	
	public List<TicketDetails> listAllTicketDetails() {
		String sql = "Select a from TicketDetails a";
		Query qry = em.createQuery(sql);
		List<TicketDetails> ticketDetails = qry.getResultList();
		//System.out.println(flight);
		return ticketDetails;
	}

	
	@Transactional
	public int updateTicketDetails(int ticketId, String journeyDate) {
		TicketDetails ad = em.find(TicketDetails.class, ticketId);
		ad.setJourneyDate(journeyDate);
		em.merge(ad);
		return ad.getTicketId();
	}

	
	public int deleteById(int ticketId, Object ad) {
		  ad = em.find(TicketDetails.class, ticketId);
		em.remove(ad);
		return  ((TicketDetails) ad).getTicketId();
	}
	


}
