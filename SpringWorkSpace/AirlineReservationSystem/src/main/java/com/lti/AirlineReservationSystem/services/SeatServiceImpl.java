package com.lti.AirlineReservationSystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.AirlineReservationSystem.beans.Seat;
import com.lti.AirlineReservationSystem.dao.SeatDao;
@Service("SeatService")
public class SeatServiceImpl implements SeatService{
    @Autowired
    SeatDao dao;
    
	public SeatDao getDao() {
		return dao;
	}

	public void setDao(SeatDao dao) {
		this.dao = dao;
	}

	public String addSeat(Seat s) {
	
		String seat = dao.addSeat(s);
		return seat;
		
	}
	@Override
	public Seat findSeatById(String seatNumber) {
		Seat seat = dao.findSeatById(seatNumber);
		return seat;
	}

	@Override
	public List<Seat> listAllSeat() {
		List<Seat> list = dao.listAllSeat();
		return list;
	}

	@Override
	public String updateSeat(String seatNumber, long seatCost) {
		String seat = dao.updateSeat(seatNumber, seatCost);
		return seat;
	}

	@Override
	public String deleteById(String seatNumber) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteById1(String seatNumber) {
		String del = dao.deleteById(seatNumber);
		return del;
	}

}

