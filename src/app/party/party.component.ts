import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrl: './party.component.css'
})
export class PartyComponent {

  constructor(
    private router: Router
  ){}

  addParty(){
    this.router.navigate(['/addEditParty'])
  }
}
