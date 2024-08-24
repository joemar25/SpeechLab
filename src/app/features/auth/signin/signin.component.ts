import { Component } from '@angular/core';
import { AutheenticationComponent } from '../login-layout/autheentication.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'] 
})
export class SigninComponent {
  constructor(
    public authComponent: AutheenticationComponent,
    private router: Router
  ) {}

  login(role: 'student' | 'teacher' | 'admin') {
    // Here you would typically authenticate the user
    // For this example, we'll just set the role and navigate
    localStorage.setItem('userRole', role);
    
    switch(role) {
      case 'student':
        this.router.navigate(['/student/dashboard']);
        break;
      case 'teacher':
        this.router.navigate(['/teacher/new-dashboard']);
        break;
      case 'admin':
        this.router.navigate(['/admin/dashboard']);
        break;
      default:
        console.error('Invalid role');
    }

    // If you need to update the sidebar, you could emit an event or use a service
    // to notify the SideBarComponent about the role change
  }
}