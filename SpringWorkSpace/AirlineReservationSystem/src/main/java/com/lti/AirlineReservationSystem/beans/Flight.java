package com.lti.AirlineReservationSystem.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="FLIGHTS")
public class Flight {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="trans_seq")
	@SequenceGenerator(name="trans_seq",initialValue = 1, allocationSize=1 )
	@Column(name="FLIGHT_NUMBER")
	private int flightNumber;
	
	@Column(name="FLIGHT_NAME")
	private String flightName;
	
	@Column(name="ORIGIN")
	private String origin;
	
	@Column(name="DESTINATION")
	private String destination;
	
	@Column(name="DEPARTURE_DATE_TIME")
	private String departureDate;
	
	@Column(name="ARRIVAL_DATE_TIME")
	private String arrivalDate;
	
	@Column(name="RETURN_DATE")
	private String returnDate;
	
	
	//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) // i got error of 
	//@ManyToOne(fetch=FetchType.LAZY,cascade={CascadeType.ALL})  
	//@JoinColumn(name="ADMIN_ID")
	private int adminId;
	
	public int getAdminId() {
		return adminId;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public Flight() {
		super();
	}

	public Flight( String flightName, String origin, String destination, String departureDate,
			String arrivalDate, String returnDate) {
		super();
		
		this.flightName = flightName;
		this.origin = origin;
		this.destination = destination;
		this.departureDate = departureDate;
		this.arrivalDate = arrivalDate;
		this.returnDate = returnDate;
	}

	public int getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(int flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}

	public String getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public String getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(String returnDate) {
		this.returnDate = returnDate;
	}

	@Override
	public String toString() {
		return "Flight [flightNumber=" + flightNumber + ", flightName=" + flightName + ", origin=" + origin
				+ ", destination=" + destination + ", departureDate=" + departureDate + ", arrivalDate=" + arrivalDate
				+ ", returnDate=" + returnDate + "]";
	}
	
		
}