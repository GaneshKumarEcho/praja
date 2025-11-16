import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mandal',
  templateUrl: './mandal.component.html',
  styleUrl: './mandal.component.css'
})
export class MandalComponent {

  constructor(
    private router: Router
  ){}

  addMandal(){
    this.router.navigate(['/addEditMandal'])
  }
}
