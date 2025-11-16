import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrl: './voter.component.css'
})
export class VoterComponent {

  constructor(
    private router: Router
  ){}

  addVoter(){
    this.router.navigate(['/addEditVoter'])
  }
}
