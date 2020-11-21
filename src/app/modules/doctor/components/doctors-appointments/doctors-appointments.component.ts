import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../../../core/http/appointment-service/appointment.service'

@Component({
  selector: 'app-doctors-appointments',
  templateUrl: './doctors-appointments.component.html',
  styleUrls: ['./doctors-appointments.component.css']
})
export class DoctorsAppointmentsComponent implements OnInit {

  constructor(public _appService:AppointmentService) { }

  ngOnInit(): void {
 	 this._appService.getDoctorApps()
  }

}
