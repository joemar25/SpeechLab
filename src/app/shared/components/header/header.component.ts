import { animate, style, transition, trigger } from '@angular/animations';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { NotificationService } from '../../../../app-services/modal-services/notification.service';
import { ManageSettingsService } from '../../../../app-services/modal-services/manage-settings.service';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../../supabase.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ClickOutsideDirective, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),  
        animate('200ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [  
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 }))
      ])
    ])
  ],
})
export class HeaderComponent implements OnInit, OnDestroy{
  currentDate: Date = new Date();
  currentTime: Date = new Date();
  private timeInterval: any;
  profileDropdown: boolean = false;
  name = '';
  role = '';
  email ='';
  


  searchTerm: string = '';
  suggestions = [
    { label: 'Go to Dashboard', route: '/student/dashboard' },
    { label: 'Go to SpeechLab', route: '/student/speechlab' },
    // Add more suggestions here
  ];
  filteredSuggestions = this.suggestions;
  showSuggestions: boolean = false;  // Declare showSuggestions property


  constructor(
    private supabaseService: SupabaseService,
    private notificationService: NotificationService,
    private settingsModal: ManageSettingsService,
    private router: Router
  ) { }


  filterSuggestions() {
    const term = this.searchTerm.toLowerCase();
    this.filteredSuggestions = this.suggestions.filter(suggestion =>
      suggestion.label.toLowerCase().includes(term)
    );
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.clearSearch();
  }

  clearSearch() {
    this.searchTerm = ''; // Clear the search box after navigation
    this.showSuggestions = false; // Hide the suggestions after navigation
    this.filteredSuggestions = this.suggestions; // Reset the suggestions
  }

  onFocus() {
    this.showSuggestions = true; // Show suggestions when input is focused
  }

  onBlur() {
    setTimeout(() => {
      this.showSuggestions = false; // Hide suggestions when input loses focus
    }, 200); // Delay to allow click events to register
  }


  ngOnInit() {
    // Update the current time every second
    this.timeInterval = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  
    // Fetch the profile data
    this.supabaseService.getUser().subscribe(user => {
      if (user) {
        this.supabaseService.getProfileHeader(user.email!).then(response => {  // Use non-null assertion
          if (response.data) {
            this.name = `${response.data.first_name} ${response.data.last_name}`;
            this.role = response.data.role;
          }
        });
      }
    });
  }
  
  

  ngOnDestroy() {
    // Clear the interval when the component is destroyed to prevent memory leaks
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }
  info = "Welcome back!";
  notification = true;
  settings = true;


  dropDown: boolean = false;
  toggleNotification() {
    this.dropDown = !this.dropDown;
  }
  toggleDropdown() {
    this.profileDropdown = !this.profileDropdown;
  }

  closeDropdown() {
    this.dropDown = false;
  }
  closeProfileDropdown() {
    this.profileDropdown = false;
  }

  openNotification() {
    this.notificationService.toggleNotification(true);
    this.closeDropdown();
  }

  openSettings() {
    this.settingsModal.toggleSettings(true);
    this.closeProfileDropdown();
  }
}