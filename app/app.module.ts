import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { LawComponent } from './law/law.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RealEstateComponent } from './realEstate/realEstate.component';
import { BankingComponent } from './banking/banking.component';
import { CivilComponent } from './civil/civil.component';
import { BusinessComponent } from './business/business.component';
import { CriminalComponent } from './criminal/criminal.component';


@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      ServicesComponent,
      ProfileComponent,
      ContactComponent,
      LawComponent,
      RealEstateComponent,
      BankingComponent,
      CivilComponent,
      BusinessComponent,
      CriminalComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
