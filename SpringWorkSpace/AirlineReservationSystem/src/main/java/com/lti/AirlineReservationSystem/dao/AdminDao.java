package com.lti.AirlineReservationSystem.dao;

import java.util.List;

import com.lti.AirlineReservationSystem.beans.Admin;

public interface AdminDao {
	public  int addAdmin(Admin admin);
public  Admin findAdminById(int adminId);
	
	public List<Admin> listAllAdmin();
	
	public  int updateAdmin(int adminId, String adminName);
	
	public  int deleteById(int adminId);
}
