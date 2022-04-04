package com.lti.AirlineReservationSystem.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="CITY")
public class City {
	 @Id
	    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="tran_seq")
		@SequenceGenerator(name="tran_seq",initialValue = 1, allocationSize=1 )
	    @Column(name="CITY_ID")
		private int cityId;
	    
	    @Column(name="CITY_NAME")
		private String cityName;

		public int getCityId() {
			return cityId;
		}

		public void setCityId(int cityId) {
			this.cityId = cityId;
		}

		public String getCityName() {
			return cityName;
		}

		public void setCityName(String cityName) {
			this.cityName = cityName;
		}

		public City( String cityName) {
			super();
			
			this.cityName = cityName;
		}

		public City() {
			super();
		}

		@Override
		public String toString() {
			return "City [cityId=" + cityId + ", cityName=" + cityName + "]";
		}
	    
	    
	
	
	

}
