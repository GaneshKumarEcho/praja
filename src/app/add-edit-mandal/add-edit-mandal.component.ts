import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateServiceService } from '../state-service.service';
import { FormBuilder } from '@angular/forms';
import { DistrictService } from '../district.service';

@Component({
  selector: 'app-add-edit-mandal',
  templateUrl: './add-edit-mandal.component.html',
  styleUrl: './add-edit-mandal.component.css'
})
export class AddEditMandalComponent {
constructor(
    private router: Router,
    private stateService: StateServiceService,
    private fb: FormBuilder,
    private districtService: DistrictService
  ){}

  mandalForm: any;
  stateList: any;
  districtList: any;

  ngOnInit(){
    this.mandalForm = this.fb.group({
      districtName: '',
      stateName:'',
      stateArea: '',
      stateConstituensy: '',
      statePopulation: ''
    })
    this.getStates();
  }
  onCancelClick() {
    this.router.navigate(['/mandal']);
  }

  getStates(){
    this.stateService.getStates().subscribe((data:any)=>{
       this.stateList = data;
    })
  }

   getDistricts(event: any){
    let stateId  = event?.target.value;
    this.districtService.getDistrictsByState(stateId).subscribe((data:any)=>{
       this.districtList = data;
    })
  }

  onSubmit() {}
}
