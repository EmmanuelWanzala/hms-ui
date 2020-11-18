import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../../../core/http/doctor-service/doctor.service'
import {AppointmentService} from '../../../../core/http/appointment-service/appointment.service'

@Component({
  selector: 'app-patient-doctors',
  templateUrl: './patient-doctors.component.html',
  styleUrls: ['./patient-doctors.component.css']
})
export class PatientDoctorsComponent implements OnInit {


	public appointment:any


	public user:any
	
  constructor(public _docService:DoctorService,public _appService: AppointmentService) { }

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
  	this._appService.appErrors=[]
  }




  setDocId=(docid)=>{
  	this.appointment.doctor=docid
  }

  bookAppointment=()=>{
  	this._appService.createAppointment(this.appointment)
  }

}
