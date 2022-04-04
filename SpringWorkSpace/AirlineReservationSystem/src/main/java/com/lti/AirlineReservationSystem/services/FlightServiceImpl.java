package com.lti.AirlineReservationSystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.AirlineReservationSystem.beans.Flight;
import com.lti.AirlineReservationSystem.dao.FlightDao;
import com.lti.AirlineReservationSystem.exception.CustomException;
@Service("flightService")
public class FlightServiceImpl implements FlightService {
	@Autowired
	FlightDao dao;
	public FlightDao getDao() {
		return dao;
	}

	public void setDao(FlightDao dao) {
		this.dao = dao;
	}

	@Override
	public Flight addFlight(Flight f) {
		
		return dao.addFlight(f);
	}

	@Override
	public Flight addFlightsWithAdmin(Flight f, int adminId) {
		return dao.addFlightsWithAdmin(f, adminId);
		 
	}

	@Override
	public Flight findFlightById(int flight_Number) {
		Flight f = dao.findFlightById(flight_Number);
		return f;
	}

	@Override
	public List<Flight> listAllFlight() {
		List<Flight> flight = dao.listAllFlight();
		return flight;
	}

	@Override
	public String updateFlight(int flight_Number, String destination) throws CustomException {
		String flight = dao.updateFlight(flight_Number, destination);
		//Double emp = dao.updateSalary(empNo, sal);
		return flight;
	}

	@Override
	public int deleteById(int flightId) {
		int del = dao.deleteById(flightId);
		return del;
	}

}
