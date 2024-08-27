import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Option {
  text: string;
}

interface Question {
  mode: string;
  text: string;
  options: Option[];
}
@Component({
  selector: 'app-class-work-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './class-work-quiz.component.html',
  styleUrl: './class-work-quiz.component.css'
})
export class ClassWorkQuizComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  cancel() {
    this.close();
  }
  deleteQuestion(index: number) {
    if (this.questions.length > 1) {
      this.questions.splice(index, 1);
    } else {
      // Optionally, show an alert or message that at least one question is required
      console.log('At least one question is required');
    }
  }
  removeOption(questionIndex: number, optionIndex: number) {
    if (this.questions[questionIndex].options.length > 2) {
      this.questions[questionIndex].options.splice(optionIndex, 1);
    } else {
      // Optionally, show an alert or message that a minimum of 2 options are required
      console.log('A minimum of 2 options are required');
    }
  }

  questions: Question[] = [
    { mode: '', text: '', options: [{text: ''}, {text: ''}] }
  ];

  addQuestion() {
    if (this.questions.length < 10) { // Limit to 10 questions, adjust as needed
      this.questions.push({ mode: '', text: '', options: [{text: ''}, {text: ''}] });
    }
  }

  addOption(questionIndex: number) {
    if (this.questions[questionIndex].options.length < 4) {
      this.questions[questionIndex].options.push({text: ''});
    }
  }
}
