package com.lti.AirlineReservationSystem.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.AirlineReservationSystem.beans.Passengers;
import com.lti.AirlineReservationSystem.dao.PassengersDao;

@Service("PassengersService")
public class PassengersServiceImpl implements PassengersService{

	@Autowired
	PassengersDao dao;
	
	
	public PassengersDao getDao() {
		return dao;
	}


	public void setDao(PassengersDao dao) {
		this.dao = dao;
	}


	@Override
	@Transactional
	public int addPassengers(Passengers p) {

		 System.out.println("Service layer");
		  int passId= dao.addPassengers(p);
		  return passId;
	}


	@Override
	public List<Passengers> listAllPassengers() {
		List<Passengers> passList=dao.listAllPassengers();
		return passList ;
	}


	@Override
	public Passengers findPassengerById(int passId) {
		Passengers p= dao.findPassengerById(passId);
		return p;
	}


	@Override
	public String updateFirstName(int passId, String fName) {
		String fn=dao.updateFirstName(passId,fName);
		return fn;
	}


	@Override
	public int deleteById(int passId) {
		int p=dao.deleteById(passId);
		return p;
	}
	
	

}
