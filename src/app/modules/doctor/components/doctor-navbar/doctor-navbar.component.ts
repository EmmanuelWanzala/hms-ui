import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../../../core/authentication/auth-service.service"


@Component({
  selector: 'app-doctor-navbar',
  templateUrl: './doctor-navbar.component.html',
  styleUrls: ['./doctor-navbar.component.css']
})
export class DoctorNavbarComponent implements OnInit {
  public profile:any
  constructor(public _authService:AuthServiceService) { }

  ngOnInit(): void {
  	this.profile = JSON.parse(localStorage.getItem('auth_user'))
  }

}
