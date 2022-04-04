import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Flight/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  addForm: any;
  submitted: boolean = false;
  adminId: number = 0;
  loginId: string = "";
  password: string = "";
  adminName: string = "";

  constructor(private formBuilder: FormBuilder, private router: Router,
    private adminService: AdminService) { }

  ngOnInit() {
    console.log("add admin init called");
    this.addForm = this.formBuilder.group({
      //id:[],
     // adminId: ['', Validators.required],
      loginId: ['', Validators.required],
      password: ['', Validators.required],
      adminName: ['', Validators.required]
      //Admin Id: ['', Validators.required]
    });
  }
  get f() {
    return this.addForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.adminService.addAdmin(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['/adminlist']);
      });
  }

}
