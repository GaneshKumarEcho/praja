import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent {

  constructor(
    private router: Router
  ){}

  addDistrict(){
    this.router.navigate(['/addEditDistrict'])
  }
}
