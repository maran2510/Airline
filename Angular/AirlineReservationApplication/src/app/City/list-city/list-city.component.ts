import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/Flight/city.service';
import { City } from '../City';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

  cityList:City[]=[];
  constructor(private cityService:CityService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    console.log("Calling service");
    this.cityService.getCityList().subscribe(
      data=>
      {
        this.cityList=data;
        console.log("in admin-list  " +this.cityList);
      }    
    );
  }

}
