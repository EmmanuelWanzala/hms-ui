import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../../core/http/patient-service/patient.service'
@Component({
  selector: 'app-doctor-patients',
  templateUrl: './doctor-patients.component.html',
  styleUrls: ['./doctor-patients.component.css']
})
export class DoctorPatientsComponent implements OnInit {


	public case:any

	public user:any

  constructor(public _patService:PatientService) { }

  ngOnInit(): void {
  	this.user=JSON.parse(localStorage.getItem('auth_user'))
  	this.case={
  		patient:'',
  		doctor:this.user.user.id,
  		case_title:'',
  		diagnosis:'',
  		medication:'',
  		medication_quantity:'',
  		service:'',
  		admission_days:''
  	}
  	this._patService.getAllPatients()
  }


  makeDiagnosis=()=>{
  	console.log(this.case)
  }

  setPatientId=(patid)=>{
  	this.case.patient=patid
  }


}
