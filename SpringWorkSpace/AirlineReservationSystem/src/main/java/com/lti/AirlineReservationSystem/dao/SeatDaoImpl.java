package com.lti.AirlineReservationSystem.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.AirlineReservationSystem.beans.Seat;

@Repository

public class SeatDaoImpl implements SeatDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public String addSeat(Seat s) {
		
		em.persist(s);
		
		return s.getSeatNumber();
	}

	@Override
	public Seat findSeatById(String seatNumber) {
		Seat seat = em.find(Seat.class, seatNumber);		
	  	 return seat;
	}

	@Override
	public List<Seat> listAllSeat() {
		String sql = "Select s from Seat s";
		Query qry = em.createQuery(sql);
		List<Seat> seat = qry.getResultList();
		//System.out.println(flight);
		return seat;
	}

	@Override
	@Transactional
	public String updateSeat(String seatNumber, long seatCost) {
		Seat seat = em.find(Seat.class, seatNumber);
		seat.setSeatNumber(seatNumber);
		em.merge(seat);
		return seat.getSeatNumber();
	}

	@Override
	@Transactional
	public String deleteById1(String seatNumber) {
		
			Seat delSeat = em.find(Seat.class, seatNumber);
			em.remove(delSeat);
			return delSeat.getSeatNumber();
	}

	@Override
	public String deleteById(String seatNumber) {
		// TODO Auto-generated method stub
		return null;
	}
	}
	


