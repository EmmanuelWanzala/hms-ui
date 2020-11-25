import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../../../../core/http/records-service/records.service'
import {MedicationService} from '../../../../core/http/medication-service/medication.service'
import {ServicesService} from '../../../../core/http/services-service/services.service'
@Component({
  selector: 'app-doctors-cases',
  templateUrl: './doctors-cases.component.html',
  styleUrls: ['./doctors-cases.component.css']
})
export class DoctorsCasesComponent implements OnInit {
	
	public case:any
  constructor(public _recService:RecordsService,public _medService:MedicationService,public _sevService:ServicesService) { }

  ngOnInit(): void {
  	this._recService.getDoctorRecords()
  }


  getCase(caseid){
  	this._recService.getCase(caseid).subscribe(
      (res) => {
        console.log(res)
        this.case=res
        
      },
      (err) => {  
      	
        console.log(err);
      }
    );
  }

  editCase(){
  	console.log(this.case)
  }
}
