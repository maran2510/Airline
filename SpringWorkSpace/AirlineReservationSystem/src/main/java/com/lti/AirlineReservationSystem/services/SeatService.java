package com.lti.AirlineReservationSystem.services;

import java.util.List;

import com.lti.AirlineReservationSystem.beans.Seat;

public interface SeatService {

	public Seat findSeatById(String seatNumber);

	public String addSeat(Seat s);
	
	public List<Seat> listAllSeat();

	public  String updateSeat(String seatNumber, long seatCost);

	public  String deleteById(String seatNumber);

	String deleteById1(String seatNumber);
}
