import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../../../core/http/appointment-service/appointment.service'
import {BillService} from '../../../../core/http/bill-service/bill.service'

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  constructor(public _appService: AppointmentService,public _billService: BillService) { }

  ngOnInit(): void {
  	this._appService.getPatientApps()
  	this._billService.getPatientBills()
  }

}
