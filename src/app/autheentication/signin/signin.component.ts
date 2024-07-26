import { Component } from '@angular/core';
import { AutheenticationComponent } from '../autheentication.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(
    public authComponent: AutheenticationComponent
  ) {
    
  }
}
