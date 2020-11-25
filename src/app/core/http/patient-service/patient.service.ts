import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment'
import { NotificationService } from '../../services/notification/notification.service';
import { NotificationType } from '../../services/notification/notification-message';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

	// http options used for making API calls
  private httpOptions: any;
  allPatients:any
  errors:boolean=false
  constructor(private http:HttpClient,private notificationService:NotificationService) { }



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




  public editProfile(profile) {

    this.http.put(`${environment.api_url}/accounts/api/patient/${profile.user.id}`,profile, this.httpOptions).subscribe(
      (data:any) => {
        localStorage.setItem('auth_user',JSON.stringify(data))
        this.notificationService.sendMessage({
            message: 'Profile updated',
            type: NotificationType.success
          });     
      },
      err => {
        console.log(err)
        this.notificationService.sendMessage({
            message: 'Error updating profile',
            type: NotificationType.error
          }); 
          }
    );
  }
}
