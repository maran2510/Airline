package com.lti.AirlineReservationSystem.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.AirlineReservationSystem.beans.Admin;
import com.lti.AirlineReservationSystem.beans.Flight;
import com.lti.AirlineReservationSystem.exception.CustomException;

@Repository
public class FlightDaoImpl implements FlightDao {
	
	@PersistenceContext
	EntityManager em;

	@Override
	@Transactional
	public Flight addFlight(Flight f) {
		em.persist(f);
		return f;
	}

	@Override
	@Transactional
	public Flight addFlightsWithAdmin(Flight f, int adminId) {
		Admin admin = em.find(Admin.class, adminId);
		
		if(admin == null)
		{
		System.out.println();	
		}
		else
		{
			f.setAdminId(adminId);
			em.persist(f);
		}
		return f;
	}
	

	@Override
	
	public Flight findFlightById(int flight_Number) {
		Flight f = em.find(Flight.class, flight_Number);
	  	 return f;
	}

	@Override
	public List<Flight> listAllFlight() {
		String sql = "Select f from Flight f";
		Query qry = em.createQuery(sql);
		List<Flight> flight = qry.getResultList();
		//System.out.println(flight);
		return flight;
	}

	@Override
	@Transactional
	public String updateFlight(int flight_Number, String destination) throws CustomException {
		Flight flight=em.find(Flight.class, flight_Number);
		
		if(flight != null)
		{
			flight.setDestination(destination);
			em.merge(flight);
			return flight.getDestination();
		}
		else
		{
			throw new CustomException("Flight does not exist...");
		}
	}
	

	@Override
	@Transactional
	public int deleteById(int flightId) {
		Flight f = em.find(Flight.class, flightId);
		em.remove(f);
		return f.getFlightNumber();
	}

}
