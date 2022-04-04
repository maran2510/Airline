import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PassengerService } from './Flight/passenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AirlineReservationSystem';
  FirstName:string;
 LastName:string;

 constructor(private service:PassengerService){}

 public loginstatus$:Observable<boolean>;
 logout()
 {
   sessionStorage.clear();
   this.service.loginstatus.next(false); 
 }
 ngOnInit(): void {
   this.loginstatus$ = this.service.isLoggedin;
   this.FirstName=sessionStorage.getItem('FIRSTNAME');
   this.LastName=sessionStorage.getItem('LASTNAME');
 }

  
}
