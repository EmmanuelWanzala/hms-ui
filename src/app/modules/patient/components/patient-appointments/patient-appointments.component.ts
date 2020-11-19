import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../../../core/http/appointment-service/appointment.service'

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {

  constructor(public _appService:AppointmentService) { }

  ngOnInit(): void {
  	this._appService.getPatientApps()
  }



  delAppointment=(appid)=>{
  	this._appService.deletePatientApp(appid)
  }
}
