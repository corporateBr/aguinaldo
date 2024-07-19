import { CriminalComponent } from './criminal/criminal.component';
import { BusinessComponent } from './business/business.component';
import { CivilComponent } from './civil/civil.component';
import { BankingComponent } from './banking/banking.component';
import { RealEstateComponent } from './realEstate/realEstate.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { LawComponent } from './law/law.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'civil', component: CivilComponent },
  { path: 'realEstate', component: RealEstateComponent },
  { path: 'banking', component: BankingComponent },
  { path: 'law', component: LawComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'criminal', component: CriminalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
