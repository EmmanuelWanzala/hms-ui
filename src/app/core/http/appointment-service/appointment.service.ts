import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment'
import { NotificationService } from '../../services/notification/notification.service';
import { NotificationType } from '../../services/notification/notification-message';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  
	// http options used for making API calls
  private httpOptions: any;
  patientAppointments:any
  docAppointments:any
  errors:boolean=false

  public appErrors=[]
  constructor(private http:HttpClient,private notificationService:NotificationService) {
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




  public getDoctorApps() {
    let user = JSON.parse(localStorage.getItem('auth_user'))

    this.http.get(`${environment.api_url}/hms/api/appointments/doctor/${user.user.id}`, this.httpOptions).subscribe(
      data => {
        this.docAppointments=data
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
         this.notificationService.sendMessage({
            message: 'Appointment Booked',
            type: NotificationType.success
          });
      },
      err => {
    
        this.appErrors=[err.error]
         this.notificationService.sendMessage({
            message: 'Error creating appointment',
            type: NotificationType.error
          });
        }
    );
  }


  public deletePatientApp(id) {
    this.http.delete(`${environment.api_url}/hms/api/appointment/${id}`, this.httpOptions).subscribe(
      data => {
      	  this.notificationService.sendMessage({
            message: 'Appointment Deleted',
            type: NotificationType.success
          });
      	this.getPatientApps()
      },
      err => {
    
         this.notificationService.sendMessage({
            message: 'Error deleting appointment',
            type: NotificationType.error
          });
       }
          
    );
  }


  public approveApp(app) {
    this.http.put(`${environment.api_url}/hms/api/appointment/${app.id}`,app, this.httpOptions).subscribe(
      data => {
          this.notificationService.sendMessage({
            message: 'Appointment Approved',
            type: NotificationType.success
          });
        this.getDoctorApps()
      },
      err => {
        console.log(err)
         this.notificationService.sendMessage({
            message: 'Error approving appointment',
            type: NotificationType.error
          });
       }
          
    );
  }


  public declineApp(app) {
    this.http.put(`${environment.api_url}/hms/api/appointment/${app.id}`,app, this.httpOptions).subscribe(
      data => {
          this.notificationService.sendMessage({
            message: 'Appointment Rejected',
            type: NotificationType.success
          });
        this.getDoctorApps()
      },
      err => {
        console.log(err)
         this.notificationService.sendMessage({
            message: 'Rejection failed',
            type: NotificationType.error
          });
       }
          
    );
  }

}






