import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-patients',
  templateUrl: './doctor-patients.component.html',
  styleUrls: ['./doctor-patients.component.css']
})
export class DoctorPatientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  data=['https://randomuser.me/api/portraits/men/83.jpg','https://randomuser.me/api/portraits/men/59.jpg','https://randomuser.me/api/portraits/men/80.jpg','https://randomuser.me/api/portraits/women/16.jpg','https://randomuser.me/api/portraits/women/89.jpg']

}
