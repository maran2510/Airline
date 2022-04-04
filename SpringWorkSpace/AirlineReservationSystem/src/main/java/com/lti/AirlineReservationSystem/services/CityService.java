package com.lti.AirlineReservationSystem.services;

import java.util.List;

import com.lti.AirlineReservationSystem.beans.City;

public interface CityService {

	public City addCity(City c);
	
	public List<City> listAllCity();
	
	public City findCityById(int cityId);

}
