import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../../../core/authentication/auth-service.service"


@Component({
  selector: 'app-doctor-navbar',
  templateUrl: './doctor-navbar.component.html',
  styleUrls: ['./doctor-navbar.component.css']
})
export class DoctorNavbarComponent implements OnInit {

  constructor(public _authService:AuthServiceService) { }

  ngOnInit(): void {
  }

}
