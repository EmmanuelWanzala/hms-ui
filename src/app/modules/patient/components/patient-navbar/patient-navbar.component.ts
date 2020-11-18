import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../../../core/authentication/auth-service.service"

@Component({
  selector: 'app-patient-navbar',
  templateUrl: './patient-navbar.component.html',
  styleUrls: ['./patient-navbar.component.css']
})
export class PatientNavbarComponent implements OnInit {

  constructor(public _authService:AuthServiceService) { }

  ngOnInit(): void {
  }

}
