package com.lti.AirlineReservationSystem.dao;

import java.util.List;

import com.lti.AirlineReservationSystem.beans.TicketDetails;

public interface TicketDetailsDao {
	public  int addTicketDetails(TicketDetails ticketDetails);
	
	public  TicketDetails findTicketById(int TicketId);
	
public List<TicketDetails> listAllTicketDetails();
	
	public  int updateTicketdetails(int ticketId, String journeydate);
	
	public  int deleteById(int ticketId);

}
