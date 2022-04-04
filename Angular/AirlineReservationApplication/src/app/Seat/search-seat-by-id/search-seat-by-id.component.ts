import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeatService } from 'src/app/Flight/seat.service';
import { Seat } from '../Seat';

@Component({
  selector: 'app-search-seat-by-id',
  templateUrl: './search-seat-by-id.component.html',
  styleUrls: ['./search-seat-by-id.component.css']
})
export class SearchSeatByIdComponent implements OnInit {

  seatObj: Seat = new Seat();
  seatNo : number = 0;
  notFound: boolean = false;
  no: number=0;
  constructor(private seatService: SeatService, private router: Router) { }

  ngOnInit(): void {
  }
  onSearch() {
    console.log("inside search" + this.seatNo);
    this.seatService.getSeatById(this.seatNo).
      subscribe((data: any) => {
        this.seatObj = data;
        
        if (this.seatObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        (error: any) => {
          console.log('Seat not found');
          this.notFound = true;
        })

  }

}
