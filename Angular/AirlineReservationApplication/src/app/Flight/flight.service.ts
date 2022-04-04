import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Flight } from './Flight';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  adminId:any;
  a:any;
  flightNumber:any;

  private baseUrl="http://localhost:8090/flight";

  constructor(private http:HttpClient) { }

  public listAllFlight()
  {
    console.log(this.http.get<any[]>(this.baseUrl+'/flights'));

    return this.http.get<any[]>(this.baseUrl+'/flights');
  }
  public getFlightById(id:number)
  {
    console.log(this.http.get<any>(this.baseUrl+'/flightsById/'+id));

    return this.http.get<any>(this.baseUrl+'/flightsById/'+id);
  }

  createFlight(flight: Flight): Observable<any> { 
    console.log("inside createFlight");
 
  this.adminId=localStorage.getItem('adminId'); 

    console.log("this.adminId" +this.adminId)

    this.a=Number("d"+this.adminId);
   
        return this.http.post(this.baseUrl+"/addFlight"+ '/' + this.adminId, flight); 
   }

   deleteFlight(id:number): Observable<any> { 
    console.log("inside createFlight");
 
  this.flightNumber=localStorage.getItem('flightNumber'); 

    console.log("this.flightId" +this.flightNumber)

    this.a=Number("e"+this.flightNumber);
   
        return this.http.delete(this.baseUrl+"/deleteFlight"+ '/' + this.flightNumber); 
   }

   

}
