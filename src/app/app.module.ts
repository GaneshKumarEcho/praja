import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { MandalComponent } from './mandal/mandal.component';
import { VillageComponent } from './village/village.component';
import { VoterComponent } from './voter/voter.component';
import { ResultComponent } from './result/result.component';
import { AddEditStateComponent } from './add-edit-state/add-edit-state.component';
import { AddEditDistrictComponent } from './add-edit-district/add-edit-district.component';
import { AddEditMandalComponent } from './add-edit-mandal/add-edit-mandal.component';
import { AddEditVillageComponent } from './add-edit-village/add-edit-village.component';
import { AddEditVoterComponent } from './add-edit-voter/add-edit-voter.component';
import { PartyComponent } from './party/party.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StateServiceService } from './state-service.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DistrictService } from './district.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StateComponent,
    DistrictComponent,
    MandalComponent,
    VillageComponent,
    VoterComponent,
    ResultComponent,
    AddEditStateComponent,
    AddEditDistrictComponent,
    AddEditMandalComponent,
    AddEditVillageComponent,
    AddEditVoterComponent,
    PartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    StateServiceService,
    DistrictService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
