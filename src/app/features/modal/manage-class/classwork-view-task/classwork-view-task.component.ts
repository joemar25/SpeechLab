import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-classwork-view-task',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './classwork-view-task.component.html',
  styleUrl: './classwork-view-task.component.css'
})
export class ClassworkViewTaskComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
