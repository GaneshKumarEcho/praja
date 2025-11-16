import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrl: './village.component.css'
})
export class VillageComponent {
 
  constructor(
      private router: Router
    ){}
  
    addVillage(){
      this.router.navigate(['/addEditVillage'])
    }
}
