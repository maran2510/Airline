import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../Flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-search-flight-by-id',
  templateUrl: './search-flight-by-id.component.html',
  styleUrls: ['./search-flight-by-id.component.css']
})
export class SearchFlightByIdComponent implements OnInit {
  flightObj: Flight = new Flight();
  flightNumber : number = 0;
  notFound: boolean = false;
  no: number=0;
  constructor(private FliService: FlightService, private router: Router) { }

  ngOnInit(): void {
  }
  onSearch() {
    console.log("inside search" + this.flightNumber);
    this.FliService.getFlightById(this.flightNumber).
      subscribe((data: any) => {
        this.flightObj = data;
        
        if (this.flightObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        (error: any) => {
          console.log('Flight not found');
          this.notFound = true;
        })

  }


}
