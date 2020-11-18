import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../core/authentication/auth-service.service'

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {

	public loginuser:any

  constructor(public _authService:AuthServiceService) { }

  ngOnInit(): void {
  	this.loginuser={
  		email:'',
  		password:''
  	}
  	this._authService.loginErrors=[]
  }


  patientLogin=()=>{
  	this._authService.loginUser(this.loginuser)
  }


}


