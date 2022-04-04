package com.lti.AirlineReservationSystem.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.AirlineReservationSystem.beans.City;



@Repository
public class CityDaoImpl implements CityDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public City addCity(City c) {
		em.persist(c);
		return c;
	}

	@Override
	public List<City> listAllCity() {
		String sql = "Select c from City c";
		Query qry = em.createQuery(sql);
		List<City> city = qry.getResultList();
		//System.out.println(flight);
		return city;
	}

	@Override
	public City findCityById(int cityId) {
		City city = em.find(City.class, cityId);
		return city;
	}

	
	
	
}
