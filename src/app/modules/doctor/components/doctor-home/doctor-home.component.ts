import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../../../core/http/appointment-service/appointment.service'
import {PatientService} from '../../../../core/http/patient-service/patient.service'
@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {

	user=JSON.parse(localStorage.getItem('auth_user'))

  constructor(public _appService: AppointmentService,public _patService:PatientService) { }

  ngOnInit(): void {
  	this._appService.getDoctorApps()
  	this._patService.getAllPatients()
  }

}
