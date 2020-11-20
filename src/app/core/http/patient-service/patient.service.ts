import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

	// http options used for making API calls
  private httpOptions: any;
  allPatients:any
  errors:boolean=false
  constructor(private http:HttpClient) { }



  public getAllPatients() {

    this.http.get(`${environment.api_url}/accounts/api/patients`, this.httpOptions).subscribe(
      data => {
        this.allPatients=data
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }
}
