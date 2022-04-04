import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Flight/admin.service';
import { Admin } from '../Admin';

@Component({
  selector: 'app-adm-login',
  templateUrl: './adm-login.component.html',
  styleUrls: ['./adm-login.component.css']
})
export class AdmLoginComponent implements OnInit {
  loginForm:any;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  adminId: any;
  password : string = "";
  pass:string="";
  userObj :Admin =new Admin();
  notFound: boolean = false;
  
  
  constructor(private formBuilder: FormBuilder, private router: Router, adminService: AdminService) { }

  onSubmit(){
    
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    if(this.loginForm.controls.Username.value =="admin" &&
        this.loginForm.controls.Password.value=="1234"){
          localStorage.setItem("Username",this.loginForm.controls.Username.value);
          this.router.navigate(['adminhome']);
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
