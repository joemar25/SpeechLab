import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';
import { NotificationService } from '../../../../app-services/modal-services/notification.service';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css',
})
export class StudentProfileComponent {

  constructor(
    private notificationService: NotificationService
  ) { }
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
  updateProfileInfo() {
    console.log('Updating profile information');
    this.notificationService.toggleSuccess();
    this.closeModal();
  }
}
