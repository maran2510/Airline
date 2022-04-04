package com.lti.AirlineReservationSystem.dao;

import java.util.List;

import com.lti.AirlineReservationSystem.beans.Flight;
import com.lti.AirlineReservationSystem.exception.CustomException;

public interface FlightDao {
	public  Flight addFlight(Flight f);
	public  Flight addFlightsWithAdmin(Flight f, int adminId);
	
	public  Flight findFlightById(int flight_Number);
	
	public List<Flight> listAllFlight();
	
	public  String updateFlight(int flight_Number, String destination) throws CustomException;
	
	public int deleteById(int flightId);

}
