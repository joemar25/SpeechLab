import { Component } from '@angular/core';
import { SigninComponent } from "../signin/signin.component";
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-autheentication',
  standalone: true,
  imports: [SigninComponent, SignupComponent],
  templateUrl: './autheentication.component.html',
  styleUrl: './autheentication.component.css'
})
export class AutheenticationComponent {
  slide: boolean = false;


  slideInOut(){
    this.slide = !this.slide;
  }
}
