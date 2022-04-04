import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  private baseUrl="http://localhost:8090/seat";

  constructor(private http:HttpClient) { }

  public listAllSeat()
  {
    console.log(this.http.get<any[]>(this.baseUrl+'/seats'));

    return this.http.get<any[]>(this.baseUrl+'/seats');
  }
  public getSeatById(id:number)
  {
    console.log(this.http.get<any>(this.baseUrl+'/seatsById/'+id));

    return this.http.get<any>(this.baseUrl+'/seatsById/'+id);
  
}
}
