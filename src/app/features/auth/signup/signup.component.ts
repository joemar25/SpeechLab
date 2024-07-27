import { Component } from '@angular/core';
import { AutheenticationComponent } from '../autheentication.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(
    public authComponent: AutheenticationComponent
  ) {
    
  }
}
