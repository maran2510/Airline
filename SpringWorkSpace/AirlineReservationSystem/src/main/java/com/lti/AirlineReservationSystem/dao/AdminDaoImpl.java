package com.lti.AirlineReservationSystem.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.AirlineReservationSystem.beans.Admin;
@Repository
public class AdminDaoImpl implements AdminDao {
	@PersistenceContext
	EntityManager em;

	@Override
	@Transactional
	public int addAdmin(Admin admin) {
		// TODO Auto-generated method stub
		em.persist(admin);
		return admin.getAdminId();
	
	}

	@Override
	public Admin findAdminById(int adminId) {
		
		Admin ad = em.find(Admin.class, adminId);
	  	 return ad;
	}

	@Override
	public List<Admin> listAllAdmin() {
		String sql = "Select a from Admin a";
		Query qry = em.createQuery(sql);
		List<Admin> admin = qry.getResultList();
		//System.out.println(flight);
		return admin;
	}

	@Override
	@Transactional
	public int updateAdmin(int adminId, String adminName) {
		Admin ad = em.find(Admin.class, adminId);
		ad.setAdminName(adminName);
		em.merge(ad);
		return ad.getAdminId();
	}

	@Override
	public int deleteById(int adminId) {
		Admin ad = em.find(Admin.class, adminId);
		em.remove(ad);
		return ad.getAdminId();
	}
	

}
