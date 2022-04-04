import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Flight/Flight';
import { FlightService } from 'src/app/Flight/flight.service';

@Component({
  selector: 'app-admin-search-list',
  templateUrl: './admin-search-list.component.html',
  styleUrls: ['./admin-search-list.component.css']
})
export class AdminSearchListComponent implements OnInit {

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
