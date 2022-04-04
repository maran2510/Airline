import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassengerService } from 'src/app/Flight/passenger.service';
import { Passenger } from '../Passenger';

@Component({
  selector: 'app-search-passenger-by-id',
  templateUrl: './search-passenger-by-id.component.html',
  styleUrls: ['./search-passenger-by-id.component.css']
})
export class SearchPassengerByIdComponent implements OnInit {
  PassObj: Passenger = new Passenger();
  passId :string ="";
  notFound: boolean = false;
  no: number=0;
  constructor(private PasService: PassengerService, private router: Router) { }

  ngOnInit(): void {
  }
  onSearch() {
    console.log("inside search" + this.passId);
    this.PasService.getPassengerById(this.passId).
      subscribe((data: any) => {
        this.PassObj = data;
        
        if (this.PassObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        (error: any) => {
          console.log('Passenger not found');
          this.notFound = true;
        })

      }

}
