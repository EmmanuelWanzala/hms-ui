import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment'
import { NotificationService } from '../../services/notification/notification.service';
import { NotificationType } from '../../services/notification/notification-message';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {


	// http options used for making API calls
  private httpOptions: any;
  allServices:any;
  errors:boolean=false

  constructor(private http:HttpClient,private notificationService:NotificationService) {

	  this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

  }
   public getAllServices() {

    this.http.get(`${environment.api_url}/hms/api/service`, this.httpOptions).subscribe(
      data => {
        this.allServices=data
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }
}
