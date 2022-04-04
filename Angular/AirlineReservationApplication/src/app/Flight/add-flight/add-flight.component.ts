import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Admin/Admin';
import { AdminService } from '../admin.service';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  
  addForm : any;
  submitted: boolean = false;
  selectedAdminId: string = "";
  adminList: Admin[] = [];
  flightNumber!: number;
  flightName : String = "";
  origin : String = "";
  destination : String = "";
  departureDate : String = "";
  arrivalDate : String = "";
  returnDate : String = "";
  adminNumber: number[] = [];
  adminForm : any;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private flightService: FlightService, private adminSer: AdminService) { }

  ngOnInit() {
    console.log("add flight init called ");
    this.adminId();
    this.addForm = this.formBuilder.group({
     // flightNumber: [],
      flightName: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      returnDate: ['', Validators.required]
    });

    this.adminForm = this.formBuilder.group({

        adminNumber: ['', Validators.required]
    });
  }
  get f() {
    return this.addForm.controls;
  }
  selectAdmin(a: any) {
    console.log("Inside ");
    console.log(a.target.value);
    this.selectedAdminId = a.target.value;
    localStorage.setItem('adminId', this.selectedAdminId);
    sessionStorage.setItem('adminId', this.selectedAdminId);
  }
  onSubmit() {
    console.log(this.adminNumber);
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.flightService.createFlight(this.addForm.value)
      .subscribe((data: any) => {
        this.router.navigate(['flights']);
      });
  }
  adminId() {
    console.log("inside adminNumber()")
    this.adminSer.getAdminList().subscribe(
      (data) => {
        this.adminList = data;
        console.log("in admin-list  " + this.adminList)
      }
    )
  }
}
