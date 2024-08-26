import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})
export class TaskViewComponent {
  @Input() taskId!: any; // Task ID passed from the parent
  @Output() closeModal = new EventEmitter<void>(); // Event emitter to notify the parent to close the modal

  // Method to emit the close event
  close() {
    this.closeModal.emit();
  }
}
