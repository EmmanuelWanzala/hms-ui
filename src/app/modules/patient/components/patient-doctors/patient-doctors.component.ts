import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-doctors',
  templateUrl: './patient-doctors.component.html',
  styleUrls: ['./patient-doctors.component.css']
})
export class PatientDoctorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=['https://randomuser.me/api/portraits/men/83.jpg','https://randomuser.me/api/portraits/men/59.jpg','https://randomuser.me/api/portraits/men/80.jpg','https://randomuser.me/api/portraits/women/16.jpg','https://randomuser.me/api/portraits/women/89.jpg']

}
