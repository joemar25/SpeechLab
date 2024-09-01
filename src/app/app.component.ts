import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SupabaseService } from './supabase.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit { 
  title = 'speechlabv2';
  data: any; 

  constructor(private supabaseService: SupabaseService) {} 

  ngOnInit() {
    this.fetchData(); 
  }

  async fetchData() {
    try {
      this.data = await this.supabaseService.getData(); 
      console.log('Fetched data:', this.data); 
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
  }
}
