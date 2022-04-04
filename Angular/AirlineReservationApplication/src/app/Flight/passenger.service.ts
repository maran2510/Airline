import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from '../Passenger/Passenger';
import{Observable} from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private baseUrl="http://localhost:8090/pas";
 // loginstatus: any;
 // isLoggedin: any;

  public loginstatus = new BehaviorSubject<boolean>((sessionStorage.length!=0)?true:false);

  

  get isLoggedin()
  {
    return this.loginstatus.asObservable();
  }


  constructor(private http:HttpClient) { }

  Login(email: string, pwd: string): Observable<string>
  {
    return this.http.get<string>(this.baseUrl + '/' + 'Login' + '/' + email + '/' + pwd); 

  }

  public listAllPassengers()
  {
    console.log(this.http.get<any[]>(this.baseUrl+'/passengers'));

    return this.http.get<any[]>(this.baseUrl+'/passengers');
  }

  public getPassengerById(passid:string)
  {
    console.log(this.http.get<any[]>(this.baseUrl+'/passengers/'+passid));

    return this.http.get<any[]>(this.baseUrl+'/passengers/'+passid);
  }
 

  addPassengers(p:Passenger)
  {  					
      return this.http.post(this.baseUrl+'/addnewpassenger' ,p);							
  }
}
