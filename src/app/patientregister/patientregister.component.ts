import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../core/authentication/auth-service.service"


@Component({
  selector: 'app-patientregister',
  templateUrl: './patientregister.component.html',
  styleUrls: ['./patientregister.component.css']
})
export class PatientregisterComponent implements OnInit {

	public reguser:any



  constructor(public _authService:AuthServiceService) { }

  ngOnInit(): void {
	  this.reguser = {
	      first_name: '',
	      last_name: '',
	      role:3,
	      email: '',
	      address:'',
	      mobile:'',
	      password: ''
	      
	  }
	  this._authService.regErrors=[]
  }

  registerPatient=()=>{
  	this._authService.registerUser(this.reguser)
  }

}

