import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientregisterComponent } from './patientregister/patientregister.component';
import {PatientDashboardComponent} from './modules/patient/components/patient-dashboard/patient-dashboard.component'
import { PatientHomeComponent } from './modules/patient/components/patient-home/patient-home.component';
import {PatientDoctorsComponent} from './modules/patient/components/patient-doctors/patient-doctors.component';
import {PatientAppointmentsComponent} from './modules/patient/components/patient-appointments/patient-appointments.component';
import {PatientBillsComponent} from './modules/patient/components/patient-bills/patient-bills.component';
import {PatientMedRecordsComponent} from './modules/patient/components/patient-med-records/patient-med-records.component';
import {DoctorDashboardComponent} from './modules/doctor/components/doctor-dashboard/doctor-dashboard.component'

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'doctor/login', component: DocloginComponent},
  {path: 'patient/login', component: PatientloginComponent},
  {path: 'patient/register', component: PatientregisterComponent},
  {path: 'doctor/register', component: DoctorregisterComponent},
  {path: 'patient/dashboard', component: PatientDashboardComponent,
   children: [
      {path: '', component: PatientHomeComponent},
      {path: 'doctors', component: PatientDoctorsComponent},
      {path: 'appointments', component: PatientAppointmentsComponent},
      {path: 'bills', component: PatientBillsComponent},
      {path: 'medrecords', component: PatientMedRecordsComponent},
    ]
  },
  {path: 'doctor/dashboard', component: DoctorDashboardComponent,
   children: [
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
