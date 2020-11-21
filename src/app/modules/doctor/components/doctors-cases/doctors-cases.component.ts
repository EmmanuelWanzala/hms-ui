import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../../../../core/http/records-service/records.service'
@Component({
  selector: 'app-doctors-cases',
  templateUrl: './doctors-cases.component.html',
  styleUrls: ['./doctors-cases.component.css']
})
export class DoctorsCasesComponent implements OnInit {

  constructor(public _recService:RecordsService) { }

  ngOnInit(): void {
  	this._recService.getDoctorRecords()
  }

}
