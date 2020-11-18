import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  
	// http options used for making API calls
  private httpOptions: any;
  patientRecords:any
  errors:boolean=false
  constructor(private http:HttpClient) {
   this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }



  public getPatientRecords() {
  	let user = JSON.parse(localStorage.getItem('auth_user'))

    this.http.get(`${environment.api_url}/hms/api/cases/patient/${user.user.id}`, this.httpOptions).subscribe(
      data => {
        this.patientRecords=data      
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }




}






