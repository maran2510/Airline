import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Admin/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = "http://localhost:8090/admin";

  constructor(private http:HttpClient) { }

  getAdminList()
 {
  console.log(this.http.get<Admin[]>(this.baseUrl+'/admins'));
  return this.http.get<Admin[]>(this.baseUrl+'/admins');
 }

 public getadminById(id:number)
 {
   console.log(this.http.get<any>(this.baseUrl+'/adminById/'+id));

   return this.http.get<any>(this.baseUrl+'/adminById/'+id);
 }
 public addAdmin(admin:Admin){	

  return this.http.post(this.baseUrl+'/addAdmin/',admin);						
  }

}
