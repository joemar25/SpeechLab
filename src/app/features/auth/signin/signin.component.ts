import { Component } from '@angular/core';
import { AutheenticationComponent } from '../login-layout/autheentication.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(
    public authComponent: AutheenticationComponent
  ) {
    
  }
}
