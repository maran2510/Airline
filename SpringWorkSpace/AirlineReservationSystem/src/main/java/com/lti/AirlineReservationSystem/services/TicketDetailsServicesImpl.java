package com.lti.AirlineReservationSystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.lti.AirlineReservationSystem.beans.Admin;
import com.lti.AirlineReservationSystem.beans.TicketDetails;
import com.lti.AirlineReservationSystem.dao.AdminDao;
import com.lti.AirlineReservationSystem.dao.TicketDetailsDao;

public class TicketDetailsServicesImpl {
	
	@Autowired
	TicketDetailsDao dao;

	public TicketDetailsDao getDao() {
		return (TicketDetailsDao) dao;
	}

	public void setDao(TicketDetailsDao dao) {
		this.dao = dao;
	}
	public int addTicketDetails(TicketDetails ticketDetails) {
		int ad = dao.addTicketDetails(ticketDetails);
		return ad;

}

	
	public int addTicketDetails1(TicketDetails ticketDetails) {
		int ad = dao.addTicketDetails(ticketDetails);
		return ad;
	}

	
	public TicketDetails findTicketById(int TicketId) {
		TicketDetails ad = dao.findTicketById(TicketId);
		return ad;
	}

	
	public List<TicketDetails> listAllTicketDetails() {
		List<TicketDetails> ad = dao.listAllTicketDetails();
		return ad;
	}

	
	public int updateTicketDetails(int ticketId, String journeyDate) {
		int admin = dao.updateTicketdetails(ticketId, journeyDate);
		return admin;
	}

	
	public int deleteById(int ticketId) {
		int del = dao.deleteById(ticketId);
		return del;
	}

}
