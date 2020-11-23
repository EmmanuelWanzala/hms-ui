import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientregisterComponent } from './patientregister/patientregister.component';
import {PatientDashboardComponent} from './modules/patient/components/patient-dashboard/patient-dashboard.component'
import {PatientHomeComponent } from './modules/patient/components/patient-home/patient-home.component';
import {PatientDoctorsComponent} from './modules/patient/components/patient-doctors/patient-doctors.component';
import {PatientAppointmentsComponent} from './modules/patient/components/patient-appointments/patient-appointments.component';
import {PatientBillsComponent} from './modules/patient/components/patient-bills/patient-bills.component';
import {PatientMedRecordsComponent} from './modules/patient/components/patient-med-records/patient-med-records.component';

import {DoctorDashboardComponent} from './modules/doctor/components/doctor-dashboard/doctor-dashboard.component'
import {DoctorHomeComponent } from './modules/doctor/components/doctor-home/doctor-home.component';
import {DoctorPatientsComponent} from './modules/doctor/components/doctor-patients/doctor-patients.component';
import {DoctorsAppointmentsComponent} from './modules/doctor/components/doctors-appointments/doctors-appointments.component';
import {DoctorsCasesComponent} from './modules/doctor/components/doctors-cases/doctors-cases.component';
import {DoctorProfileComponent} from './modules/doctor/components/doctor-profile/doctor-profile.component';
import {DoctorEditProfileComponent} from './modules/doctor/components/doctor-edit-profile/doctor-edit-profile.component';

import {AuthGuardService as AuthGuard} from './core/guards/auth-guard.service';


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
    ],canActivate: [AuthGuard]
  },
  {path: 'doctor/dashboard', component: DoctorDashboardComponent,
   children: [
      {path: '', component: DoctorHomeComponent},
      {path: 'patients', component: DoctorPatientsComponent},
      {path: 'appointments', component: DoctorsAppointmentsComponent},
      {path: 'profile', component: DoctorProfileComponent},
      {path: 'profile/edit', component: DoctorEditProfileComponent},
      {path: 'records', component: DoctorsCasesComponent},
    ],canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
