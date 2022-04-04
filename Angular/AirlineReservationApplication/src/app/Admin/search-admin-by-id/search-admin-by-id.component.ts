import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Flight/admin.service';
import { Admin } from '../Admin';

@Component({
  selector: 'app-search-admin-by-id',
  templateUrl: './search-admin-by-id.component.html',
  styleUrls: ['./search-admin-by-id.component.css']
})
export class SearchAdminByIdComponent implements OnInit {

  adminObj: Admin = new Admin();
  adminNo : number = 0;
  notFound: boolean = false;
  no: number=0;
  constructor(private AdiService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
  onSearch() {
    console.log("inside search" + this.adminNo);
    this.AdiService.getadminById(this.adminNo).
      subscribe((data: any) => {
        this.adminObj = data;
        
        if (this.adminObj) {
          this.notFound = true;
        }
        {
          this.notFound = false;
        }

      },
        (error: any) => {
          console.log('Admin not found');
          this.notFound = true;
        })

  }
}
