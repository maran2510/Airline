import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../Flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-delete-flight-by-id',
  templateUrl: './delete-flight-by-id.component.html',
  styleUrls: ['./delete-flight-by-id.component.css']
})
export class DeleteFlightByIdComponent implements OnInit {
  flightObj: Flight = new Flight();
  flightNumber : number;
  notFound: boolean = false;
  no: number=0;
  constructor(private FliService: FlightService, private router: Router) { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log("inside search" + this.flightNumber);
    this.FliService.deleteFlight(this.flightNumber);
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
function subscribe(arg0: (data: any) => void, arg1: (error: any) => void) {
  throw new Error('Function not implemented.');
}

