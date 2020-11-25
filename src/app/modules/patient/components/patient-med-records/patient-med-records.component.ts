import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../../../../core/http/records-service/records.service'

@Component({
  selector: 'app-patient-med-records',
  templateUrl: './patient-med-records.component.html',
  styleUrls: ['./patient-med-records.component.css']
})
export class PatientMedRecordsComponent implements OnInit {

  constructor(public _recService:RecordsService) { }

  ngOnInit(): void {

  	this._recService.getPatientRecords()
  }

}
