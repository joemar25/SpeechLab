import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
  animations: [

  ],
})
export class NotificationComponent {
 @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
