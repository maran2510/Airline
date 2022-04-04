import { Component, OnInit } from '@angular/core';
import { SeatService } from 'src/app/Flight/seat.service';
import { Seat } from '../Seat';

@Component({
  selector: 'app-search-seat',
  templateUrl: './search-seat.component.html',
  styleUrls: ['./search-seat.component.css']
})
export class SearchSeatComponent implements OnInit {

  constructor(private seatSer:SeatService) { }
  
   seatList : Seat[] = [];
  
  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.seatSer.listAllSeat().subscribe(
      data=>
      {
        this.seatList=data;
        console.log("in seat-list  " +this.seatList )
      }    
    )
  }


}
