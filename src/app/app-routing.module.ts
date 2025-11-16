import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { MandalComponent } from './mandal/mandal.component';
import { VillageComponent } from './village/village.component';
import { VoterComponent } from './voter/voter.component';
import { ResultComponent } from './result/result.component';
import { PartyComponent } from './party/party.component';
import { AddEditStateComponent } from './add-edit-state/add-edit-state.component';
import { AddEditDistrictComponent } from './add-edit-district/add-edit-district.component';
import { AddEditMandalComponent } from './add-edit-mandal/add-edit-mandal.component';
import { AddEditVillageComponent } from './add-edit-village/add-edit-village.component';
import { AddEditVoterComponent } from './add-edit-voter/add-edit-voter.component';

const routes: Routes = [
  //test ganesh
  {
    path: 'state', component: StateComponent
  },
  {
    path: 'district', component: DistrictComponent
  },
  {
    path: 'mandal', component: MandalComponent
  },
  {
    path: 'village', component: VillageComponent
  },
  {
    path: 'voter', component: VoterComponent
  },
  {
    path: 'party', component: PartyComponent
  },
  {
    path: 'result', component: ResultComponent
  },
  {
    path: 'addEditState', component: AddEditStateComponent
  },
  {
    path: 'addEditState/:id', component: AddEditStateComponent
  },
  {
    path: 'addEditDistrict', component: AddEditDistrictComponent
  },
  {
    path: 'addEditMandal', component: AddEditMandalComponent
  },
  {
    path: 'addEditVillage', component: AddEditVillageComponent
  },
  {
    path: 'addEditVoter', component: AddEditVoterComponent
  },
  {
    path: 'addEditVoter/:id', component: AddEditVoterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
