import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { PassengerService } from 'src/app/Flight/passenger.service';
//import { FileUploadService } from  './add-passenger.component.spec'
import { FileUploadService } from 'src/app/Transaction/add-transaction/add-transaction.service';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {
  model: any = [];
  siteKey:string;
//  this.siteKey= "6Le4Nv4eAAAAANd8WLgB2WUhkY4Weo8wy7mGjs3D";
//  recaptcha: ['', Validators.required]
 
baseApiUrl = "https://file.io"
  addForm : any;
  //myGroup : any;
  submitted: boolean = false;
   title : string="";
    passId : any;
    fName :string="";
    lName :string="";
    gender :string="";
    email :string="";
    password :string="";
    doB : string=""; 
    phoneNum: number=0;

   // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  

  constructor(private formBuilder: FormBuilder,private fileUploadService: FileUploadService, private router: Router, 
    private passengerService:PassengerService ) { this.siteKey= "6LdpSv4eAAAAAIidWmlARXxG0-QVmgwSQw3ls2x-"; }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      recaptcha: ['', Validators.required],
     // id:[],
      title: ['', Validators.required],
      fName:['', Validators.required],
      lName: ['', Validators.required],
      gender:['', Validators.required],
      email:['', Validators.required],
      password: ['', Validators.required],
      doB: ['', Validators.required],
      phoneNum: ['', Validators.required]
    });
  
  }
  get f() {
    return this.addForm.controllers;
  }

  onSubmit() {
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }
    this.passengerService.addPassengers(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/passengers']);
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


}
