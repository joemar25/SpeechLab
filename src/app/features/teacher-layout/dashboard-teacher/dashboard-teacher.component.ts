import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CalendarComponent } from '../../../shared/components/calendar/calendar.component';
import { ModalChatComponent } from "../../modal/dashboard/modal-chat/modal-chat.component";
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';
import { animate, style, transition, trigger } from '@angular/animations';
import { ModalAlertComponent } from "../../modal/dashboard/modal-alert/modal-alert.component";
import { ModalBroadcastComponent } from "../../modal/dashboard/modal-broadcast/modal-broadcast.component";

@Component({
  selector: 'app-dashboard-teacher',
  standalone: true,
  imports: [CalendarComponent, ModalChatComponent, ClickOutsideDirective, ModalAlertComponent, ModalBroadcastComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard-teacher.component.html',
  styleUrl: './dashboard-teacher.component.css',
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
export class DashboardTeacherComponent {
  showChatModal: boolean = false;
  showAlertModal: boolean = false;
  showBroadcastModal: boolean = false;
  openChatModal() {
    this.showChatModal = true;
  }
  closeChatModal() {
    this.showChatModal = false;
  }

  openAlertModal() {
    this.showAlertModal = true;
  }

  closeAlertModal() {
    this.showAlertModal = false;
  }

  openBroadcastModal() {
    this.showBroadcastModal = true;
  }

  closeBroadcastModal() {
    this.showBroadcastModal = false;
  }

}
