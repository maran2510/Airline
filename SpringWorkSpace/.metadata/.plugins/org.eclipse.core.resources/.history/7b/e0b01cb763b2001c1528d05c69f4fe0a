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

import com.lti.AirlineReservationSystem.beans.Admin;
import com.lti.AirlineReservationSystem.dao.AdminDaoImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/admin")

public class AdminController {
	@Autowired
	AdminDaoImpl adminService;
	
	//http://localhost:8070/admin/addAdmin
			@PostMapping("/addAdmin")
			public int addAdmin(@RequestBody Admin admin) {
			return adminService.addAdmin(admin);	
			}
			//http://localhost:8070/admin/admins
			//http://localhost:8070/admin/admins
			@GetMapping("/admins")
			public List<Admin> listAllAdmin()
			{
				return adminService.listAllAdmin();
			}

			//http://localhost:8070/admin/adminById/400002
			@GetMapping("/adminById/{id}")
			public Admin findAdminById(@PathVariable(value = "id")int adminId)
			{
				Admin a = null;
				a = adminService.findAdminById(adminId);
				return a;
			}
}
