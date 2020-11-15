import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'doctor/login', component: DocloginComponent},
  {path: 'patient/login', component: PatientloginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
