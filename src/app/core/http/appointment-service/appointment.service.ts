import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  
	// http options used for making API calls
  private httpOptions: any;
  patientAppointments:any
  errors:boolean=false

  public appErrors=[]
  constructor(private http:HttpClient) {
   this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }



  public getPatientApps() {
  	let user = JSON.parse(localStorage.getItem('auth_user'))

    this.http.get(`${environment.api_url}/hms/api/appointments/patient/${user.user.id}`, this.httpOptions).subscribe(
      data => {
        this.patientAppointments=data
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }




  public createAppointment(appointment) {
    this.http.post(`${environment.api_url}/hms/api/appointment/create`, appointment, this.httpOptions).subscribe(
      data => {
      	alert('Appointment Booked')
      },
      err => {
    
        this.appErrors=[err.error]
          }
    );
  }


  public deletePatientApp(id) {
    this.http.delete(`${environment.api_url}/hms/api/appointment/${id}`, this.httpOptions).subscribe(
      data => {
      	alert('Appointment deleted')
      	this.getPatientApps()
      },
      err => {
    
        console.log(err)
          }
    );
  }




}






