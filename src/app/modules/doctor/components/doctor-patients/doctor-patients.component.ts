import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../../core/http/patient-service/patient.service'
@Component({
  selector: 'app-doctor-patients',
  templateUrl: './doctor-patients.component.html',
  styleUrls: ['./doctor-patients.component.css']
})
export class DoctorPatientsComponent implements OnInit {

  constructor(public _patService:PatientService) { }

  ngOnInit(): void {
  	this._patService.getAllPatients()
  }



}
