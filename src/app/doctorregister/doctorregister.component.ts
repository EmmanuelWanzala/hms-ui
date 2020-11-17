import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.css']
})
export class DoctorregisterComponent implements OnInit {

  constructor() { }

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
  }

  registerDoc=()=>{
  	console.log(this.reguser)
  }

}
