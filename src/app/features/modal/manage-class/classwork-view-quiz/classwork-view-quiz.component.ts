import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-classwork-view-quiz',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './classwork-view-quiz.component.html',
  styleUrl: './classwork-view-quiz.component.css'
})
export class ClassworkViewQuizComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
