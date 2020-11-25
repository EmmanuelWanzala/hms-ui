import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../../core/http/patient-service/patient.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import {UploadImageService} from '../../../../core/http/upload-image-service/upload-image.service'
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { NotificationType } from '../../../../core/services/notification/notification-message';

@Component({
  selector: 'app-patient-edit-profile',
  templateUrl: './patient-edit-profile.component.html',
  styleUrls: ['./patient-edit-profile.component.css']
})
export class PatientEditProfileComponent implements OnInit {
	
	profile_image: FormGroup;
  response;
  imageURL;
	public profile:any
	public blood_groups:string[]
  constructor(private formBuilder: FormBuilder,public _patService:PatientService,private uploadService: UploadImageService,private notificationService:NotificationService) { }

  ngOnInit(): void {
  	this.profile_image = this.formBuilder.group({
      profile: ['']
    });
  	this.profile = JSON.parse(localStorage.getItem('auth_user'))

  	this.blood_groups=['A+','A-','B+','B-','O+','O-','AB+','AB-']
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
console.log(this.profile)
  	this._patService.editProfile(this.profile)
  }




}
