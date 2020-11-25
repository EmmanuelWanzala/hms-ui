import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

	public my_profile:any
  constructor() { }

  ngOnInit(): void {
  	this.my_profile = JSON.parse(localStorage.getItem('auth_user'))
  }

}
