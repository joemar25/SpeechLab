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

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    SideBarComponent,
    NotificationComponent,
    ManageSettingsComponent,
    SuccessMessageComponent,
    NoChangesComponent,
  ],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.css',
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
export class StudentLayoutComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  private settingsSubscription: Subscription | undefined;
  private successSubscription!: Subscription;
  notification: boolean = false;
  settings: boolean = false;
  success: boolean = false;
  noChanges: boolean = false;

  constructor(
    public notificationService: NotificationService,
    private settingsModal: ManageSettingsService
  ) {}

  ngOnInit() {
    this.subscription = this.notificationService.notification$.subscribe(
      (state) => (this.notification = state)
    );

    this.settingsSubscription = this.settingsModal.settings$.subscribe(
      (state) => (this.settings = state) // Changed this line
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.settingsSubscription) {
      this.settingsSubscription.unsubscribe();
    }
    if (this.successSubscription) {
      this.successSubscription.unsubscribe();
    }
  }

  closeManageSettings() {
    this.settingsModal.toggleSettings(false);
  }

  closeNotification() {
    this.notificationService.toggleNotification(false);
  }

}
