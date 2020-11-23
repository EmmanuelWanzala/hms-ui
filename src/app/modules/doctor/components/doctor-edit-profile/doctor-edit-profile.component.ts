import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../../../core/http/doctor-service/doctor.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import {UploadImageService} from '../../../../core/http/upload-image-service/upload-image.service'
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { NotificationType } from '../../../../core/services/notification/notification-message';

@Component({
  selector: 'app-doctor-edit-profile',
  templateUrl: './doctor-edit-profile.component.html',
  styleUrls: ['./doctor-edit-profile.component.css']
})
export class DoctorEditProfileComponent implements OnInit {
	
	profile_image: FormGroup;
  response;
  imageURL;
	public profile:any
	public departments:string[]
  constructor(private formBuilder: FormBuilder,public _docService:DoctorService,private uploadService: UploadImageService,private notificationService:NotificationService) { }

  ngOnInit(): void {
  	this.profile_image = this.formBuilder.group({
      profile: ['']
    });
  	this.profile = JSON.parse(localStorage.getItem('auth_user'))
  	this.departments=['Consultant','Cardiologist','Oncologist','Dermatologists','Emergency Medicine Specialists','Allergists/Immunologists','Anesthesiologists','Colon and Rectal Surgeons']
  }

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profile_image.get('profile').setValue(file);
    }
    const formData = new FormData();
    formData.append('file', this.profile_image.get('profile').value);
  	this.uploadService.upload(formData).subscribe(
      (res) => {
        
        this.profile.profile_pic=res.data.url;
        this.notificationService.sendMessage({
          message: 'Image uploaded successfully.Update profile',
          type: NotificationType.success
        });
        
      },
      (err) => {  
      	this.notificationService.sendMessage({
          message: 'Error uploading profile pic',
          type: NotificationType.error
        });
        console.log(err);
      }
    );
  }

  updateProfile=()=>{

  	this._docService.editProfile(this.profile)
  }




}
