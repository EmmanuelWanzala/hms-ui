import { Component, OnInit } from '@angular/core';
import {BillService} from '../../../../core/http/bill-service/bill.service'


@Component({
  selector: 'app-patient-bills',
  templateUrl: './patient-bills.component.html',
  styleUrls: ['./patient-bills.component.css']
})
export class PatientBillsComponent implements OnInit {

  constructor(public _billService:BillService) { }

  ngOnInit(): void {
  	this._billService.getPatientBills()
  }
   pad=(num)=> {
   	let size=3
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
	}

}
