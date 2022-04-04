package com.lti.AirlineReservationSystem.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.AirlineReservationSystem.beans.City;
import com.lti.AirlineReservationSystem.dao.CityDao;


@Service("CityService")
public class CityServiceImpl implements CityService {

	
	@Autowired
	CityDao dao;
	
	
	public CityDao getDao() {
		return dao;
	}


	public void setDao(CityDao dao) {
		this.dao = dao;
	}


	@Override
	public City addCity(City c) {
		return dao.addCity(c);
	}


	@Override
	public List<City> listAllCity() {
		List<City> city = dao.listAllCity();
		return city;
	}


	@Override
	public City findCityById(int cityId) {
		City c = dao.findCityById(cityId);
		return c;
	}






}
