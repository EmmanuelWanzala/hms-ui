import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../../../core/http/doctor-service/doctor.service'


@Component({
  selector: 'app-patient-doctors',
  templateUrl: './patient-doctors.component.html',
  styleUrls: ['./patient-doctors.component.css']
})
export class PatientDoctorsComponent implements OnInit {


	public appointment:any


	public user:any
	
  constructor(public _docService:DoctorService) { }

  ngOnInit() {
  	this.user=JSON.parse(localStorage.getItem('auth_user'))
  	this.appointment={
  		patient:this.user.user.id,
  		doctor:'',
  		app_title:'',
  		app_details:'',
  		app_date:''
  	}
  	this._docService.getAllDoctors()
  }




  setDocId=(docid)=>{
  	this.appointment.doctor=docid
  }

  bookAppointment=()=>{
  	console.log(this.appointment)
  }

}
