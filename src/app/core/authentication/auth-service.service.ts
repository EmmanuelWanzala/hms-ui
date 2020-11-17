import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

	// http options used for making API calls
  private httpOptions: any;
 
  // error messages received from the login attempt
  public regErrors: any = [];

  

  constructor(private http:HttpClient,private router:Router) {
  	this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }

 

 public registerUser(user) {
    this.http.post(`${environment.api_url}/accounts/api/register`, JSON.stringify(user), this.httpOptions).subscribe(
      data => {
      	alert(data.message)
      	if (data.user.role===2) {
        	this.router.navigate(['/doctor/login'])
      	}else if(data.user.role===3){
      		this.router.navigate(['/patient/login'])
      	}
       
      },
      err => {

        this.regErrors =[err.error]
          }
    );
  }

 
}



