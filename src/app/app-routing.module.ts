import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientregisterComponent } from './patientregister/patientregister.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'doctor/login', component: DocloginComponent},
  {path: 'patient/login', component: PatientloginComponent},
  {path: 'patient/register', component: PatientregisterComponent},
  {path: 'doctor/register', component: DoctorregisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
