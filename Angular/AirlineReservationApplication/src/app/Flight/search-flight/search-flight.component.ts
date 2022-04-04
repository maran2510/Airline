import { Component, OnInit } from '@angular/core';
import { Flight } from '../Flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  constructor(private fliSer:FlightService) { }
  
   flightList : Flight[] = [];
  
  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.fliSer.listAllFlight().subscribe(
      data=>
      {
        this.flightList=data;
        console.log("in flight-list  " +this.flightList )
      }    
    )
  }
}
