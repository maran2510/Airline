package com.lti.AirlineReservationSystem.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="TicketDetails")
public class TicketDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="t_seq")
	@SequenceGenerator(name="t_seq",initialValue = 1, allocationSize=1 )
	@Column(name="Ticket_ID")
	private int ticketId;
	
	@Column(name="Passenger_No")
	private int passengerNo;

	@Column(name="Flight_Code")
	private String flightCode;
	
	@Column(name="Journey_Date")
	private String journeyDate;
	
	@Column(name="journey_Time")
	private String journeyTime;
	
	@Column(name="Source")
	private String source;
	
	@Column(name="Destination")
	private String destination;
	
	
	
	
	public TicketDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TicketDetails( int passengerNo, String flightCode, String journeyDate, String journeyTime,
			String source, String destination) {
		super();
		this.passengerNo = passengerNo;
		this.flightCode = flightCode;
		this.journeyDate = journeyDate;
		this.journeyTime = journeyTime;
		this.source = source;
		this.destination = destination;
	}

	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public int getPassengerNo() {
		return passengerNo;
	}

	public void setPassengerNo(int passengerNo) {
		this.passengerNo = passengerNo;
	}

	public String getFlightCode() {
		return flightCode;
	}

	public void setFlightCode(String flightCode) {
		this.flightCode = flightCode;
	}

	public String getJourneyDate() {
		return journeyDate;
	}

	public void setJourneyDate(String journeyDate) {
		this.journeyDate = journeyDate;
	}

	public String getJourneyTime() {
		return journeyTime;
	}

	public void setJourneyTime(String journeyTime) {
		this.journeyTime = journeyTime;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	@Override
	public String toString() {
		return "TicketDetails [ticketId=" + ticketId + ", passengerNo=" + passengerNo + ", flightCode=" + flightCode
				+ ", journeyDate=" + journeyDate + ", journeyTime=" + journeyTime + ", source=" + source
				+ ", destination=" + destination + "]";
	}

	

	
	
	
	
}
