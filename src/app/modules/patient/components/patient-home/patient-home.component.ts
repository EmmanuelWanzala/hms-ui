import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../../../core/http/appointment-service/appointment.service'
import {BillService} from '../../../../core/http/bill-service/bill.service'
import {DoctorService} from '../../../../core/http/doctor-service/doctor.service'
import {RecordsService} from '../../../../core/http/records-service/records.service'

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

	
	user=JSON.parse(localStorage.getItem('auth_user'))

  constructor(public _appService: AppointmentService,public _billService: BillService,public _docService:DoctorService,public _recService:RecordsService) { }

  ngOnInit(): void {
  	this._appService.getPatientApps()
  	this._billService.getPatientBills()
  	this._docService.getAllDoctors()
  	this._recService.getPatientRecords()
  }

}
