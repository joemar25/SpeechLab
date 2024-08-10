import { animate, style, transition, trigger } from '@angular/animations';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { NotificationService } from '../../../../app-services/modal-services/notification.service';
import { ManageSettingsService } from '../../../../app-services/modal-services/manage-settings.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ClickOutsideDirective, CommonModule],
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


  constructor(
    private notificationService: NotificationService,
    private settingsModal: ManageSettingsService
  ) { }

  ngOnInit() {
    // Update the current time every second
    this.timeInterval = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
  ngOnDestroy() {
    // Clear the interval when the component is destroyed to prevent memory leaks
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }
  name="Michael Maxwell";
  info = "Welcome back!";
  notification = true;
  settings = true;


  dropDown: boolean = false;
  profileDropdown: boolean = false;
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