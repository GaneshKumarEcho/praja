import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateServiceService } from '../state-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {
  
  stateList: any;

  constructor(
    private router: Router,
    private stateService: StateServiceService,
    private toastr: ToastrService
  ){}

  ngOnInit(){ 
    this.getStates();
  }

  getStates(){
    this.stateService.getStates().subscribe((data:any)=>{
      debugger
       this.stateList = data;
    })
  }

  addState(){
    this.router.navigate(['/addEditState'])
  }

  deleteState(state: any){
   this.stateService.deleteState(state.id).subscribe((d:any)=>{
    this.toastr.error('deleted successfully!', 'Success', {
          timeOut: 5000
        });
   })
  }

  editState(state: any){
    this.router.navigate([`/addEditState/${state.id}`])
  }
}
