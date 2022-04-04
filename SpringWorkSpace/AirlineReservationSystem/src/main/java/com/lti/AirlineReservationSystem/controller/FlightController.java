package com.lti.AirlineReservationSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.AirlineReservationSystem.beans.Flight;
import com.lti.AirlineReservationSystem.beans.Transaction;
import com.lti.AirlineReservationSystem.services.FlightServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/flight")
public class FlightController {
	@Autowired
	FlightServiceImpl flightService;
	// http://localhost:8090/flight/addFlight
	@PostMapping("/addFlight") 
	public Flight addFlight(@RequestBody Flight f)
	{
		return flightService.addFlight(f);
	}	
	
	//http://localhost:8090/flight/flights
	@GetMapping("/flights")
	public List<Flight> listAllEmployee()
	{
		return flightService.listAllFlight();
		
	}	
	
	//http://localhost:8090/flight/flightsById/6E316
	@GetMapping("/flightsById/{id}")
	public Flight findFlightById(@PathVariable(value = "id")int flight_Number)
	{
		Flight f= null;
		f= flightService.findFlightById(flight_Number);
		return f;
	}
	
	//http://localhost:8090/flight/addFlight/6E318
			@PostMapping(value = "/addFlight/{adminid}")
			public void addFlightsWithAdmin(@PathVariable(value = "adminid") int adminId, @RequestBody Flight f)
			{
				System.out.println(f);
				flightService.addFlightsWithAdmin(f, adminId);
			}
	
	

}
