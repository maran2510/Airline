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

import com.lti.AirlineReservationSystem.beans.City;
import com.lti.AirlineReservationSystem.services.CityServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/city")
public class CityController {

	@Autowired
	CityServiceImpl cityService;

	// http://localhost:8070/city/addnewcity
	@PostMapping("/addnewcity")
	public void addCity(@RequestBody City c) {

		cityService.addCity(c);

	}

	// http://localhost:8070/city/cities
	@GetMapping("/cities")
	public List<City> listAllCity() {
		return cityService.listAllCity();
	}

	// http://localhost:8070/city/cityById/
	@GetMapping("/cityById/{id}")
	public City findCityById(@PathVariable(value = "id") int cityId) {
		City c = null;
		c = cityService.findCityById(cityId);
		return c;
	}
}
