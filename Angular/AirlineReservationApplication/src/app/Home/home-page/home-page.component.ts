import { Component,NgZone, OnInit } from '@angular/core';
import { FlightService } from 'src/app/Flight/flight.service';
import { Flight } from 'src/app/Flight/Flight';
import { Router } from '@angular/router';
import { FormsModule, NgForm, FormGroup, NgModel,Validators } from '@angular/forms';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  


})
export class HomePageComponent implements OnInit {
  textBoxDisabled = true;
  model: any = [];
  svc:FlightService;
  addForm:any;
  submitted: boolean = false;
  flightObj: Flight = new Flight();
  flightNumber : number = 0;
  notFound: boolean = false;
  no: number=0;
  fi= new Flight();
  fiReturn= new Flight();
  ngzone: NgZone;
  router: Router; 
  flag:number=0;
  adult:number;
  child:number;
  infant:number;
  aci:number;
  flist= new Flight();
  FirstName:string;
 LastName:string;
 value:any;
  dd:any;
  Departure:any;
 

  constructor(svc:FlightService, ngzone:NgZone, router:Router,private FliService: FlightService,) {

   
    

    this.svc = svc;
    this.ngzone = ngzone;
    this.router = router;
   }

   

  

  ngOnInit(): void {
    localStorage.clear();
    Departure : ['', Validators.required]
  }

  Searchflight(search: NgForm): void 
  {
    
    this.fi.flightName = search.value.airlines;
    this.fi.arrivalDate = search.value.dd;
    this.fi.origin = search.value.from;
    this.fi.destination = search.value.to;
    

    this.fiReturn.flightName = search.value.airlines;
    this.fiReturn.returnDate = search.value.rd;
    this.fiReturn.origin = search.value.to;
    this.fiReturn.destination = search.value.from;
    

    this.adult=search.value.adult;
    this.child=search.value.child;
    this.infant=search.value.infant;
    this.aci=this.adult+this.child+this.infant;
    if(this.fiReturn.returnDate == undefined){
      this.flag=0;
    }
    else{
      this.flag=1;
    }
    console.log("Hello"+this.flag);
  
     localStorage.setItem('FLAG',this.flag.toString());
      localStorage.setItem('FLIGHTNAME',this.fi.flightName);
      localStorage.setItem('FLIGHTDATE', this.fi.arrivalDate);
      localStorage.setItem('ORIGIN',this.fi.origin);
      localStorage.setItem('DESTINATION', this.fi.destination);
      localStorage.setItem('RETURNFLIGHTNAME',this.fiReturn.flightName);
      localStorage.setItem('RETURNFLIGHTDATE', this.fiReturn.returnDate);
      localStorage.setItem('RETURNORIGIN',this.fiReturn.origin);
      localStorage.setItem('RETURNDESTINATION', this.fiReturn.destination);
      localStorage.setItem('ADULT',this.adult.toString());
      localStorage.setItem('CHILD',this.child.toString());
      localStorage.setItem('INFANT',this.infant.toString());
      localStorage.setItem('ACI',this.aci.toString());
      this.ngzone.run(()=>this.router.navigateByUrl('/flights'));
    
    

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
