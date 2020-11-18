import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../../../core/http/appointment-service/appointment.service'
@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  constructor(public _appService: AppointmentService) { }
  
  ngOnInit(): void {
  	this._appService.getPatientApps()
  }

}
