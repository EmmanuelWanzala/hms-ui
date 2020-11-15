import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/patient/components/home/home.component';
import { AppointmentsComponent } from './modules/patient/components/appointments/appointments.component';
import { BillingComponent } from './modules/patient/components/billing/billing.component';
import { MedicalrecordsComponent } from './modules/patient/components/medicalrecords/medicalrecords.component';
import { ProfileComponent } from './modules/patient/components/profile/profile.component';
import { LogoutComponent } from './modules/patient/components/logout/logout.component';
import { NavbarComponent } from './modules/patient/components/navbar/navbar.component';
import { DoctorDashboardComponent } from './modules/doctor/components/doctor-dashboard/doctor-dashboard.component';
import { DoctorsPageComponent } from './modules/doctor/components/doctors-page/doctors-page.component';
import { DoctorsAppointmentsComponent } from './modules/doctor/components/doctors-appointments/doctors-appointments.component';
import { DoctorsCasesComponent } from './modules/doctor/components/doctors-cases/doctors-cases.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientregisterComponent } from './patientregister/patientregister.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentsComponent,
    BillingComponent,
    MedicalrecordsComponent,
    ProfileComponent,
    LogoutComponent,
    NavbarComponent,
    DoctorDashboardComponent,
    DoctorsPageComponent,
    DoctorsAppointmentsComponent,
    DoctorsCasesComponent,
    WelcomeComponent,
    DocloginComponent,
    PatientloginComponent,
    PatientregisterComponent,
    DoctorregisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
