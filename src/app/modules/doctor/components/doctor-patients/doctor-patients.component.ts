import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../../core/http/patient-service/patient.service'
import {MedicationService} from '../../../../core/http/medication-service/medication.service'
import {ServicesService} from '../../../../core/http/services-service/services.service'
import {RecordsService} from '../../../../core/http/records-service/records.service'

@Component({
  selector: 'app-doctor-patients',
  templateUrl: './doctor-patients.component.html',
  styleUrls: ['./doctor-patients.component.css']
})
export class DoctorPatientsComponent implements OnInit {


	public case:any

	public user:any

  constructor(public _patService:PatientService,public _medService:MedicationService,public _sevService:ServicesService,public _recService:RecordsService) { }

  ngOnInit(){
  	this.user=JSON.parse(localStorage.getItem('auth_user'))
  	this.case={
  		patient:'',
  		doctor:this.user.user.id,
  		case_title:'',
  		diagnosis:'',
  		medication:'',
  		medication_quantity:0,
  		service:'',
  		admission_days:''
  	}
  	this._patService.getAllPatients()
  	this._medService.getAllMeds()
  	this._sevService.getAllServices()
  }


  makeDiagnosis=()=>{
  	this._recService.createRecord(this.case)
  }

  setPatientId=(patid)=>{
  	this.case.patient=patid
  		this.case.case_title=''
  		this.case.diagnosis=''
  		this.case.medication=''
  		this.case.medication_quantity=0
  		this.case.service=''
  		this.case.admission_days=''
  	
  }


}
