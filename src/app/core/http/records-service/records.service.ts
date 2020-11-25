import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment'
import { NotificationService } from '../../services/notification/notification.service';
import { NotificationType } from '../../services/notification/notification-message';
@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  
	// http options used for making API calls
  private httpOptions: any;
  patientRecords:any
  docRecords:any
  errors:any=[]
  constructor(private http:HttpClient,private notificationService:NotificationService) {
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




  public getDoctorRecords() {
    let user = JSON.parse(localStorage.getItem('auth_user'))

    this.http.get(`${environment.api_url}/hms/api/cases/doctor/${user.user.id}`, this.httpOptions).subscribe(
      data => {
        this.docRecords=data
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }



  public createRecord(newcase) {
    this.http.post(`${environment.api_url}/hms/api/case/create`, newcase, this.httpOptions).subscribe(
      data => {
         this.notificationService.sendMessage({
            message: 'Diagnosed Patient',
            type: NotificationType.success
          });
          this.notificationService.sendMessage({
            message: 'Patient Bill Generated',
            type: NotificationType.success
          });
      },
      err => {
        console.log(err)
        this.errors=[err.error]
         this.notificationService.sendMessage({
            message: 'Error creating case',
            type: NotificationType.error
          });
         this.notificationService.sendMessage({
            message: 'Error generating patient bill',
            type: NotificationType.error
          });
        }
    );
  }


  public getCase(caseid) {
    return this.http.get<any>(`${environment.api_url}/hms/api/case/${caseid}`,  this.httpOptions);
  }



}






