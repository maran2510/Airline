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

import com.lti.AirlineReservationSystem.beans.Seat;
import com.lti.AirlineReservationSystem.services.SeatService;
import com.lti.AirlineReservationSystem.services.SeatServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/seat")
public class SeatController {
	@Autowired
	SeatServiceImpl seatService;
	
	//http://localhost:8070/seat/addSeat
	
	@PostMapping("/addSeat")
	
    public String addseat(@RequestBody Seat s)
{
	return seatService.addSeat(s);
		
	}
	//http://localhost:8070/seat/seats
	@GetMapping("/seats")
	public List<Seat> listAllSeat() {
		return seatService.listAllSeat();
	}
	
	//http://localhost:8070/seat/seatsById/A1
	@GetMapping("/seatsById/{id}")
	public Seat findSeatById(@PathVariable(value = "id")String seat_Number) {
             Seat s = null;
	
		s = seatService.findSeatById(seat_Number);
		return s;
		
}
     }
