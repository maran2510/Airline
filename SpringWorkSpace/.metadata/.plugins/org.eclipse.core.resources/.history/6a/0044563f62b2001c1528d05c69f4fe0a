package com.lti.AirlineReservationSystem.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="ADMIN")
public class Admin {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="ta_seq")
	@SequenceGenerator(name="ta_seq",initialValue = 1, allocationSize=1 )
	@Column(name="ADMIN_ID")
	private int adminId;
	
	@Column(name="LOGIN_ID")
	private String loginId;

	@Column(name="PASSWORD")
	private String password;
	
	@Column(name="ADMIN_NAME")
	private String adminName;
	public Admin() {
		super();
	}
	public Admin( String loginId, String password, String adminName) {
		super();
		
		this.loginId = loginId;
		this.password = password;
		this.adminName = adminName;
	}
	public int getAdminId() {
		return adminId;
	}
	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}
	public String getLoginId() {
		return loginId;
	}
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	@Override
	public String toString() {
		return "\nAdmin [adminId=" + adminId + ", loginId=" + loginId + ", password=" + password + ", adminName="
				+ adminName + "]";
	}
	
	
}