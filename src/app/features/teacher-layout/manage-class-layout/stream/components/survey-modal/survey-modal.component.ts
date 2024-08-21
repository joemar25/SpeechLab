import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Question {
  description: string;
  options: string[];
}
@Component({
  selector: 'app-survey-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './survey-modal.component.html',
  styleUrl: './survey-modal.component.css'
})
export class SurveyModalComponent {
  @Input() id: string | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();

  questions: Question[] = [
    { description: '', options: ['', '', '', ''] }
  ];

  closeModal() {
    this.closeModalEvent.emit();
  }

  addOption(questionIndex: number, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.questions[questionIndex].options.length < 4) {
      this.questions[questionIndex].options.push('');
    }
  }

  removeOption(questionIndex: number, optionIndex: number) {
    this.questions[questionIndex].options.splice(optionIndex, 1);
  }

  addQuestion(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.questions.push({ description: '', options: ['', ''] });
  }

  removeQuestion(questionIndex: number) {
    this.questions.splice(questionIndex, 1);
  }

  save(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    // Implement save logic
    console.log('Saving evaluation:', this.questions);
    this.closeModal();
  }
  
  cancel(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    // Implement cancel logic
    this.closeModal();
  }
}
