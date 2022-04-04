import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { AdmLoginComponent } from './Admin/adm-login/adm-login.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';

import { SearchAdminByIdComponent } from './Admin/search-admin-by-id/search-admin-by-id.component';
import { ListCityComponent } from './City/list-city/list-city.component';
import { AddFlightComponent } from './Flight/add-flight/add-flight.component';
import { SearchFlightByIdComponent } from './Flight/search-flight-by-id/search-flight-by-id.component';
import { SearchFlightComponent } from './Flight/search-flight/search-flight.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { AddPassengerComponent } from './Passenger/add-passenger/add-passenger.component';
import { ListPassengerComponent } from './Passenger/list-passenger/list-passenger.component';
import { PassengerHomeComponent } from './Passenger/passenger-home/passenger-home.component';
import { PassengerLoginComponent } from './Passenger/passenger-login/passenger-login.component';
import { SearchPassengerByIdComponent } from './Passenger/search-passenger-by-id/search-passenger-by-id.component';
import { SearchSeatByIdComponent } from './Seat/search-seat-by-id/search-seat-by-id.component';
import { SearchSeatComponent } from './Seat/search-seat/search-seat.component';
import { AddTransactionComponent } from './Transaction/add-transaction/add-transaction.component';
import { BookingComponent } from './Transaction/booking/booking.component';
import { ListAllTransactionComponent } from './Transaction/list-all-transaction/list-all-transaction.component';
import { SearchByIdComponent } from './Transaction/search-by-id/search-by-id.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SelectSeatComponent } from './Seat/select-seat/select-seat.component';
import { FaqComponent } from './faq/faq.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { DeleteFlightByIdComponent } from './Flight/delete-flight-by-id/delete-flight-by-id.component';
import { AdminSearchListComponent } from './admin/admin-search-list/admin-search-list.component';



const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'homepage', component:HomePageComponent},
  {path:'flights', component:SearchFlightComponent},
  {path:'flightbyid', component:SearchFlightByIdComponent},
  
  {path:'admlogin', component:AdmLoginComponent},
  {path:'adminhome', component:AdminHomeComponent},
  {path:'passengers',component:ListPassengerComponent},
  {path:'passbyid',component:SearchPassengerByIdComponent},
  {path:'addpassenger',component:AddPassengerComponent},
  {path:'adminbyid',component:SearchAdminByIdComponent},
  {path:'add-admin',component:AddAdminComponent},
  {path:'addflight', component:AddFlightComponent},
  {path:'transaction', component:ListAllTransactionComponent},
  {path:'transactionById', component:SearchByIdComponent},
  {path:'city', component:ListCityComponent},
  {path:'passengerhome', component:PassengerHomeComponent},
  {path:'passengerlogin', component:PassengerLoginComponent},
  {path:'seatlist', component:SearchSeatComponent},
  {path:'seatbyid', component:SearchSeatByIdComponent},
  {path:'addtransaction', component:AddTransactionComponent},
  {path:'booking', component:BookingComponent},
  {path: 'forgotpassword', component:ForgotpasswordComponent},
  {path: 'select-seat', component:SelectSeatComponent},
  {path: 'faq',component:FaqComponent},
  {path: 'about',component:AboutpageComponent},
  {path: 'deleteflight',component:DeleteFlightByIdComponent},
  {path: 'admin-search-list',component:AdminSearchListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
