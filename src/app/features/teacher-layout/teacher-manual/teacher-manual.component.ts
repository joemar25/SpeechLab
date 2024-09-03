import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { SupabaseService } from '../../../supabase.service';

@Component({
  selector: 'app-teacher-manual',
  standalone: true,  // Make this component standalone
  imports: [CommonModule],  // Import CommonModule directly
  templateUrl: './teacher-manual.component.html',
  styleUrls: ['./teacher-manual.component.css']
})
export class TeacherManualComponent implements OnInit {
  profiles: any[] = []; // Initialize as an empty array

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {
    this.fetchProfiles();
  }

  async fetchProfiles() {
    try {
      const data = await this.supabaseService.getData(); // This fetches data from 'profiles'
      if (Array.isArray(data)) {
        this.profiles = data;
        console.log('Fetched profiles:', this.profiles);
      } else {
        console.error('Data is not an array:', data);
      }
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  }
}
