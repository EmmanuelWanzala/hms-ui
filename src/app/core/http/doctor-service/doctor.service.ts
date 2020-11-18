import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  
	// http options used for making API calls
  private httpOptions: any;
  allDocs:any
  errors:boolean=false
  constructor(private http:HttpClient) {
   this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }



  public getAllDoctors() {

    this.http.get(`${environment.api_url}/accounts/api/doctors`, this.httpOptions).subscribe(
      data => {
        this.allDocs=data      
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }




}





