import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateServiceService } from '../state-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-edit-district',
  templateUrl: './add-edit-district.component.html',
  styleUrl: './add-edit-district.component.css'
})
export class AddEditDistrictComponent {

  constructor(
    private router: Router,
    private stateService: StateServiceService,
    private fb: FormBuilder
  ){}

  districtForm: any;
  stateList: any;

  ngOnInit(){
    this.districtForm = this.fb.group({
      districtName: '',
      stateName:'',
      stateArea: '',
      stateConstituensy: '',
      statePopulation: ''
    })
    this.getStates();
  }
  onCancelClick() {
    this.router.navigate(['/district']);
  }

  getStates(){
    this.stateService.getStates().subscribe((data:any)=>{
      debugger
       this.stateList = data;
    })
  }

  onSubmit() {}
}
