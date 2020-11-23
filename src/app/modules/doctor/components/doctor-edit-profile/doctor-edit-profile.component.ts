import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../../../core/http/doctor-service/doctor.service'
@Component({
  selector: 'app-doctor-edit-profile',
  templateUrl: './doctor-edit-profile.component.html',
  styleUrls: ['./doctor-edit-profile.component.css']
})
export class DoctorEditProfileComponent implements OnInit {
	

	public profile:any
	public departments:string[]
  constructor(public _docService:DoctorService) { }

  ngOnInit(): void {
  	this.profile = JSON.parse(localStorage.getItem('auth_user'))
  	this.departments=['Consultant','Cardiologist','Oncologist','Dermatologists','Emergency Medicine Specialists','Allergists/Immunologists','Anesthesiologists','Colon and Rectal Surgeons']
  }


  updateProfile=()=>{

  	this._docService.editProfile(this.profile)
  }




}
