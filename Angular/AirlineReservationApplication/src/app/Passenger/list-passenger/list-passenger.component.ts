import { Component, OnInit } from '@angular/core';
import { PassengerService } from 'src/app/Flight/passenger.service';
import { Passenger } from '../Passenger';

@Component({
  selector: 'app-list-passenger',
  templateUrl: './list-passenger.component.html',
  styleUrls: ['./list-passenger.component.css']
})
export class ListPassengerComponent implements OnInit {

  constructor(private PasSer:PassengerService) { }
  
  PassengerList : Passenger[] = [];
 
 ngOnInit(): void {
   this.loadData();
 }
 loadData()
 {
   this.PasSer.listAllPassengers().subscribe(data=>
     {
       this.PassengerList=data;
       console.log("in Passenger-list " +this.PassengerList)
     }    
   )
 }
}
