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

import com.lti.AirlineReservationSystem.beans.Admin;
import com.lti.AirlineReservationSystem.beans.TicketDetails;
import com.lti.AirlineReservationSystem.dao.AdminDaoImpl;
import com.lti.AirlineReservationSystem.dao.TicketDetailsDaoImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ticketDetails")

public class TicketDetailsController {
	
	@Autowired
	TicketDetailsDaoImpl ticketDetailsService;
	
	//http://localhost:8070/ticketDetails/addTicketDetails
			@PostMapping("/addTicketDetails")
			public int addTicketDetails(@RequestBody TicketDetails ticketDetails) {
			return ticketDetailsService.addTicketDetails(ticketDetails);	
			}
			//http://localhost:8070/ticketDetails/ticketDetails
			//http://localhost:8070/ticketDetails/ticketDetails
			@GetMapping("/ticketDetails")
			public List<TicketDetails> listTicketDetails()
			{
				return ticketDetailsService.listAllTicketDetails();
			}

			//http://localhost:8070/ticketDetails/TicketById/10001
			@GetMapping("/ticketById/{id}")
			public TicketDetails findTicketById(@PathVariable(value = "id")int ticketId)
			{
				TicketDetails a = null;
				a = ticketDetailsService.findTicketById(ticketId);
				return a;
			}

}
