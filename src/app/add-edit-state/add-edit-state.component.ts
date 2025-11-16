import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateServiceService } from '../state-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-state',
  templateUrl: './add-edit-state.component.html',
  styleUrl: './add-edit-state.component.css'
})
export class AddEditStateComponent {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private stateService: StateServiceService,
    private route: ActivatedRoute,
    private toaster: ToastrService
  ) { }

  stateForm: any;
  stateId: any;
  stateDetails: any;

  ngOnInit() {
    this.stateForm = this.fb.group({
      stateName: '',
      stateArea: '',
      stateConstituensy: '',
      statePopulation: ''
    })
    this.stateId = this.route.snapshot.params['id'];
    if (this.stateId) {
      this.getStateById();
    }


  }

  onCancelClick() {
    this.router.navigate(['/state']);
  }

  onSubmit() {
    let formData = this.stateForm.getRawValue();
    if (this.stateId) {
      this.stateService.editState(this.stateId, formData).subscribe((data: any) => {
        this.toaster.success('Saved successfully!', 'Success', {
          timeOut: 3000
        });
        this.router.navigate(['/state']);

      })
    } else {
      this.stateService.addState(formData).subscribe((data: any) => {
        this.toaster.success('Saved successfully!', 'Success', {
          timeOut: 3000
        });
        this.router.navigate(['/state']);
      })
    }

  }

  getStateById() {
    this.stateService.getStateById(this.stateId).subscribe((data: any) => {
      this.stateDetails = data;
      if (this.stateDetails) {
        this.stateForm.get('stateName')?.patchValue(this.stateDetails?.stateName);
        this.stateForm.get('statePopulation')?.patchValue(this.stateDetails?.statePopulation);
        this.stateForm.get('stateArea')?.patchValue(this.stateDetails?.stateArea);
        this.stateForm.get('stateConstituensy')?.patchValue(this.stateDetails?.stateConstituensy);
      }
    })
  }
}
