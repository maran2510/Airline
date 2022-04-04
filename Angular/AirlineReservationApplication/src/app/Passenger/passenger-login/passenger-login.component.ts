import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-login',
  templateUrl: './passenger-login.component.html',
  styleUrls: ['./passenger-login.component.css']
})
export class PassengerLoginComponent implements OnInit {
  loginForm:any;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  passId:String;
  password:String;

  constructor(private formBuilder: FormBuilder, private router: Router, ) { }

  onSubmit(){
    
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    if(this.loginForm.controls.Username.value =="user" &&
        this.loginForm.controls.Password.value=="1234"){
          localStorage.setItem("Username",this.loginForm.controls.Username.value);
          this.router.navigate(['passengerhome']);
    }
    else{
      this.invalidLogin = true;
    }
  }

  ngOnInit() {    

    this.loginForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });

  }

}
