import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { SearchFlightByIdComponent } from './Flight/search-flight-by-id/search-flight-by-id.component';
import { SearchFlightComponent } from './Flight/search-flight/search-flight.component';
import { AdminListComponent } from './Admin/admin-list/admin-list.component';
import { AdmLoginComponent } from './Admin/adm-login/adm-login.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { CommonModule } from '@angular/common';
import { ListPassengerComponent } from './Passenger/list-passenger/list-passenger.component';
import { SearchPassengerByIdComponent } from './Passenger/search-passenger-by-id/search-passenger-by-id.component';
import { AddPassengerComponent } from './Passenger/add-passenger/add-passenger.component';
import { AddFlightComponent } from './Flight/add-flight/add-flight.component';
import { SearchAdminByIdComponent } from './Admin/search-admin-by-id/search-admin-by-id.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { ListCityComponent } from './City/list-city/list-city.component';
import { SearchCityByIdComponent } from './City/search-city-by-id/search-city-by-id.component';
import { ListAllTransactionComponent } from './Transaction/list-all-transaction/list-all-transaction.component';
import { SearchByIdComponent } from './Transaction/search-by-id/search-by-id.component';
import { PassengerHomeComponent } from './Passenger/passenger-home/passenger-home.component';
import { PassengerLoginComponent } from './Passenger/passenger-login/passenger-login.component';
import { SearchSeatComponent } from './Seat/search-seat/search-seat.component';
import { SearchSeatByIdComponent } from './Seat/search-seat-by-id/search-seat-by-id.component';
import { AddTransactionComponent } from './Transaction/add-transaction/add-transaction.component';
import { BookingComponent } from './Transaction/booking/booking.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SelectSeatComponent } from './Seat/select-seat/select-seat.component';
import { DeleteFlightByIdComponent } from './Flight/delete-flight-by-id/delete-flight-by-id.component';
import { AdminSearchListComponent } from './admin/admin-search-list/admin-search-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchFlightByIdComponent,
    SearchFlightComponent,
    AdminSearchListComponent,
    AdminListComponent,
    AdmLoginComponent,
    AdminHomeComponent,
    SearchFlightComponent,
    ListPassengerComponent,
    SearchPassengerByIdComponent,
    AddPassengerComponent,
    AddFlightComponent,
    SearchAdminByIdComponent,
    AddAdminComponent,
    ListCityComponent,
    SearchCityByIdComponent,
    ListAllTransactionComponent,
    SearchByIdComponent,
    PassengerHomeComponent,
    PassengerLoginComponent,
    SearchSeatComponent,
    SearchSeatByIdComponent,
    AddTransactionComponent,
    BookingComponent,
    ForgotpasswordComponent,
    SelectSeatComponent,
    DeleteFlightByIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
