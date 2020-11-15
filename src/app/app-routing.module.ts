import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './modules/patient/components/billing/billing.component';
import { HomeComponent } from './modules/patient/components/home/home.component';
import { MedicalrecordsComponent } from './modules/patient/components/medicalrecords/medicalrecords.component';


const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'medicalrecords',component:MedicalrecordsComponent},
  {path: 'billing',component: BillingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,MedicalrecordsComponent,BillingComponent]