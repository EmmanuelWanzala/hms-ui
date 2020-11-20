import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../../../core/http/appointment-service/appointment.service'

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {

	user=JSON.parse(localStorage.getItem('auth_user'))

  constructor(public _appService: AppointmentService) { }

  ngOnInit(): void {
  	this._appService.getDoctorApps()
  }

}
