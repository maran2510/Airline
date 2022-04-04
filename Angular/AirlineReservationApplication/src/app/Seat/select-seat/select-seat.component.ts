import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Admin/Admin';
import { SeatService } from 'src/app/Flight/seat.service';
import { FlightService } from 'src/app/Flight/flight.service';
import { Seat } from '../Seat';
import { Flight } from 'src/app/Flight/Flight';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.scss']
})
export class SelectSeatComponent implements OnInit {

  flightObj: Flight = new Flight();
  flightNumber : number = 0;
  flightList : Flight[] = [];
  addForm : any;
  submitted: boolean = false;
  notFound: boolean = false;
  flightName : String = "";
  seatType : String ="";
  seatCost : number = 0;
  seatNumber : String = "";
  public rows: Array<String>;
  public seats: Array<Number>;
  public seatAvailable: Array<Seat>;
  private reservedSeats: Array<String>;
  private refresh: EventEmitter<void>;
  

  constructor(private formBuilder: FormBuilder, private router: Router,
    private fliSer: FlightService, private SeatService: SeatService, private FliService:FlightService
    ) { }

  ngOnInit(): void {

    this.loadData();

    console.log("add flight init called ");
    this.addForm = this.formBuilder.group({
   
      seatNumber:['',Validators.required],
      seatCost:['',Validators.required],
      seatType: ['', Validators.required],
      flightName: ['', Validators.required],
      returnDate: ['', Validators.required]
    });
    
    
    
  }
  get f() {
    return this.addForm.controls;
  }

  onSubmit() {
    console.log(this.seatType);
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.SeatService.getSeatById(this.addForm.value)
    .subscribe((data: any) => {
      this.router.navigate(['flights']);
    });
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
