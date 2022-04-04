import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/Flight/transaction.service';
import { Transaction } from '../Transaction';
import { FileUploadService } from './add-transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  addForm: any ;
  submitted: boolean = false;
  trId:number=0;
  passangerId:string="";
  flightNo:string="";
  bookingDate:string="";
  cityId:number=0;
  seatNo:string="";
  tfair:number=0;
  pstatus:string=""; 

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

 constructor(private formBuilder: FormBuilder, private fileUploadService: FileUploadService, private router: Router,
   private traServie : TransactionService) { }

 ngOnInit() {
   console.log("add admin init called");
   this.addForm = this.formBuilder.group({

     passangerId: ['', Validators.required],
     flightNo: ['', Validators.required],
     bookingDate:['', Validators.required],
     cityId:['', Validators.required],
     seatNo:['', Validators.required],
     tfair:['', Validators.required],
     pstatus:['', Validators.required]

     //Admin Id: ['', Validators.required]
   });
 }
 get f(){
   return this.addForm.controls;
 }

onSubmit() {
 this.submitted = true;
 if(this.addForm.invalid){
   return;
 }
 this.traServie.createTransaction(this.addForm.value)
   .subscribe( data => {
     this.router.navigate(['/booking']);
   });
}

onChange(event:any) {
  this.file = event.target.files[0];
}

onUpload() {
  this.loading = !this.loading;
  console.log(this.file);
  this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
          }
      }
  );
}


  // addForm: any;
  // submitted: boolean = false;
  // passId: any;
  // flightNumber: any;
  // cityId: any;
  // seatNumber: any;

  // t1: Transaction = 
  // {
  //    trId: 0, passangerId: '',flightNo:'', bookingDate:'', cityId:0, seatNo:'', tfair:0, pstatus:''
  // };

  // constructor(private formBuilder: FormBuilder, private router: Router, private traService: TransactionService) {
    
  //   this.passId = sessionStorage.getItem("passId");
  //   this.flightNumber = sessionStorage.getItem("flightNo");
  //   this.cityId = sessionStorage.getItem("cityId");
  //   this.seatNumber = sessionStorage.getItem("seatNumber");
    
  //   console.log("session passId :" + sessionStorage.getItem("passId"));
  //   console.log("session flightNumber :" + sessionStorage.getItem("flightNumber"));
  //   console.log("session cityId :" + sessionStorage.getItem("cityId"));
  //   console.log("session seatNumber :" + sessionStorage.getItem("seatNumber"));    
  // }
  // // constructor(private formBuilder: FormBuilder, private router: Router, private traService: TransactionService, private passService: PassengerService, private fliService: FlightService, private seatService:SeatService, private cityService: CityService) {
    
  // //   this.passId = sessionStorage.getItem("passId");
  // //   this.flightNumber = sessionStorage.getItem("flightNumber");
  // //   this.cityId = sessionStorage.getItem("cityId");
  // //   this.seatNumber = sessionStorage.getItem("seatNumber");    
  // // }

  // ngOnInit() {
  //   this.addForm = this.formBuilder.group({
  //     trId: ['', Validators.required],
  //     bookingDate: ['', Validators.required],
  //     tfair: ['', Validators.required],
  //     pstatus: ['', Validators.required],
  //   });
  // }

  // onSubmit() {

  //   this.t1.trId = this.addForm.controls['trId'].value;
  //   this.t1.tfair = this.addForm.controls['tfair'].value;
  //   this.t1.bookingDate = this.addForm.controls['bookingDate'].value;
  //   this.t1.pstatus = this.addForm.controls['pstatus'].value;
  //   this.t1.passangerId = this.passId;
  //   this.t1.flightNo = this.flightNumber;
  //   this.t1.cityId = this.cityId;
  //   this.seatNumber = this.seatNumber;

  //   this.submitted = true;
  //   if (this.addForm.invalid) {
  //     return;
  //   }
  //   this.traService.createTransaction(this.t1)
  //     .subscribe(data => {
  //       //console.log("payment object added " + this.addForm.value);
  //       console.log("payment object added " + this.t1);
  //     });
  // }

}
