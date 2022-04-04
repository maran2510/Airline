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

import com.lti.AirlineReservationSystem.beans.Passengers;
import com.lti.AirlineReservationSystem.services.PassengersServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/pas")
public class PassengersController {

	@Autowired
	PassengersServiceImpl pasService;
	
	

	// http://localhost:8070/pas/addnewpassenger
	@PostMapping("/addnewpassenger")
	public void addPassengers(@RequestBody Passengers p) {
		pasService.addPassengers(p);
	}
		
		
	
	
	//http://localhost:8070/pas/passengers
	@GetMapping("/passengers")
	public List<Passengers> listAllPassengers()
	{
		//System.out.println(pasService.listAllPassengers());
		return pasService.listAllPassengers();
			
	}
	
	
	//http://localhost:8070/pas/passengers/12341
			@GetMapping("/passengers/{id}")
			public Passengers findPassengerById(@PathVariable(value="id") int passId)
			{
			return pasService.findPassengerById(passId);
			}
}
