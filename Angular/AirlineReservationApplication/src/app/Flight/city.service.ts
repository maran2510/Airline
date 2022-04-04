import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../City/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private baseUrl = "http://localhost:8090/city";

  constructor(private http:HttpClient) { }

  getCityList()
 {
  console.log(this.http.get<any[]>(this.baseUrl+'/cities'));
  return this.http.get<any[]>(this.baseUrl+'/cities');
 }

 public getCityById(id:number)
 {
   console.log(this.http.get<any>(this.baseUrl+'/cityById/'+id));

   return this.http.get<any>(this.baseUrl+'/cityById/'+id);
 }
 public addCity(city:City){	

  return this.http.post(this.baseUrl+'/addCity/',city);						
  }
}
