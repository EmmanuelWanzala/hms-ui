import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BillService {

  
	// http options used for making API calls
  private httpOptions: any;
  patientBills:any
  errors:boolean=false
  constructor(private http:HttpClient) {
   this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }



  public getPatientBills() {
  	let user = JSON.parse(localStorage.getItem('auth_user'))

    this.http.get(`${environment.api_url}/hms/api/bills/patient/${user.user.id}`, this.httpOptions).subscribe(
      data => {
        this.patientBills=data      
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }




}






