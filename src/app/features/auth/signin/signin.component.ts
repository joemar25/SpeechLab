import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../../../supabase.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],  // Include FormsModule here
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  ngOnInit() {
    // Check if user is already logged in
    const userRole = localStorage.getItem('userRole');

    if (userRole) {
      // Redirect to the appropriate dashboard
      this.redirectToDashboard(userRole);
    }
  }

  async login() {
    try {
      // Authenticate user with Supabase
      const { data: authData, error: authError } = await this.supabaseService.signIn(this.email, this.password);
  
      if (authError) {
        console.error('Authentication Error:', authError.message);
        alert('Invalid credentials. Please try again.');
        return;
      }
  
      // Fetch user profile from 'profiles' table
      const { data: userProfile, error: profileError } = await this.supabaseService.getProfile(this.email);
  
      if (profileError || !userProfile) {
        console.error('Error fetching user profile:', profileError?.message);
        alert('Failed to fetch user profile.');
        return;
      }
  
      // Extract user role from profile
      const userRole = userProfile?.role;
  
      // Ensure that the userRole is not null or undefined
      if (!userRole) {
        console.error('User role is null or undefined');
        alert('User role is not defined.');
        return;
      }

      // Store the userRole in localStorage
      localStorage.setItem('userRole', userRole);
  
      // Redirect to the appropriate dashboard
      this.redirectToDashboard(userRole);
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
    }
  }

  loginWithPredefinedAccount(role: 'student' | 'teacher' | 'admin') {
    let email = '';
    let password = '';

    switch (role) {
      case 'student':
        email = 'james@gmail.com';
        password = 'password';
        break;
      case 'teacher':
        email = 'isla@teacher.com';
        password = 'password';
        break;
      case 'admin':
        email = 'adam@admin.com';
        password = 'password';
        break;
    }

    this.email = email;
    this.password = password;
    this.login();
  }

  // Helper function to redirect to the appropriate dashboard
  private redirectToDashboard(userRole: string) {
    switch (userRole) {
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
        console.error('Unknown role:', userRole);
        alert('Unknown user role.');
    }
  }
}
