import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../core/authentication/auth-service.service"


@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.css']
})
export class DoctorregisterComponent implements OnInit {

	public reguser:any



  constructor(public _authService:AuthServiceService) { }

  ngOnInit(): void {
	  this.reguser = {
	      first_name: '',
	      last_name: '',
	      role:2,
	      email: '',
	      address:'',
	      mobile:'',
	      password: ''
	      
	  }
	  this._authService.regErrors=[]
  }

  registerDoc=()=>{
  	this._authService.registerUser(this.reguser)
  }

}
