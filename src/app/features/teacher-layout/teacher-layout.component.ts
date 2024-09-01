import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../../app-services/modal-services/notification.service';
import { NotificationComponent } from '../../shared/modal/notification/notification.component';
import { ManageSettingsService } from '../../../app-services/modal-services/manage-settings.service';
import { ManageSettingsComponent } from '../modal/manage-settings/manage-settings.component';
import { SuccessMessageComponent } from '../../shared/modal/success-message/success-message.component';
import { NoChangesComponent } from '../../shared/modal/no-changes/no-changes.component';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../../shared/modal/chat/chat.component';
import { SidebarServiceService } from '../../core/services/SidebarService/sidebar-service.service';

@Component({
  selector: 'app-teacher-layout',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    NotificationComponent,
    ManageSettingsComponent,
    SuccessMessageComponent,
    NoChangesComponent,
    CommonModule,
    ChatComponent,
    SideBarComponent,
  ],
  templateUrl: './teacher-layout.component.html', 
  styleUrl: './teacher-layout.component.css',
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
export class TeacherLayoutComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  notification: boolean = false;
  settings: boolean = false;
  success: boolean = false;
  noChanges: boolean = false;
  isSidebarCollapsed = false;
  isChatVisible: boolean = false;

  constructor(
    public notificationService: NotificationService,
    private settingsModal: ManageSettingsService,
    private sidebarService: SidebarServiceService
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.notificationService.notification$.subscribe(
        state => this.notification = state
      )
    );

    this.subscription.add(
      this.settingsModal.settings$.subscribe(
        state => this.settings = state
      )
    );

    this.subscription.add(
      this.sidebarService.isCollapsed$.subscribe(
        collapsed => this.isSidebarCollapsed = collapsed
      )
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeManageSettings() {
    this.settingsModal.toggleSettings(false);
  }

  closeNotification() {
    this.notificationService.toggleNotification(false);
  }

  toggleChatModal() {
    this.isChatVisible = !this.isChatVisible;
  }
}