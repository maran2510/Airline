import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Flight/admin.service';
import { Admin } from '../Admin';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  adminList:Admin[]=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    console.log("Calling service");
    this.adminService.getAdminList().subscribe(
      data=>
      {
        this.adminList=data;
        console.log("in admin-list  " +this.adminList);
      }    
    );
  }
}
