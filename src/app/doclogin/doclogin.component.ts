import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../core/authentication/auth-service.service'
@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent implements OnInit {

	public loginuser:any
	
  constructor(public _authService:AuthServiceService) { }

  ngOnInit(): void {

  	this.loginuser={
  		email:'',
  		password:''
  	}
  }

  docLogin=()=>{
  	// this._authService.loginUser(this.loginuser)
  	console.log(this.loginuser)
  }

}
