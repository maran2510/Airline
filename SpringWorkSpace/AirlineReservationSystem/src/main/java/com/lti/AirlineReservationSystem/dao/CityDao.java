package com.lti.AirlineReservationSystem.dao;

import java.util.List;

import com.lti.AirlineReservationSystem.beans.City;

public interface CityDao {

	public City addCity(City c);
	
	public List<City> listAllCity();
	
	public City findCityById(int cityId);

}
