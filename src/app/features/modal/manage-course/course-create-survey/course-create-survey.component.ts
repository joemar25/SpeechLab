import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';

interface Question {
  text: string;
  type: 'paragraph' | 'short-answer';
}
@Component({
  selector: 'app-course-create-survey',
  standalone: true,
  imports: [FormsModule, CommonModule, ClickOutsideDirective],
  templateUrl: './course-create-survey.component.html',
  styleUrl: './course-create-survey.component.css'
})
export class CourseCreateSurveyComponent {
  @Output () close = new EventEmitter<void>();
  formTitle = '';
  formDescription = '';
  questions: Question[] = [];
  showQuestionForm = false;
  newQuestion: Question = { text: '', type: 'paragraph' };

  addQuestion() {
    this.showQuestionForm = true;
  }

  saveQuestion() {
    if (this.newQuestion.text) {
      this.questions.push({ ...this.newQuestion });
      this.newQuestion = { text: '', type: 'paragraph' };
      this.showQuestionForm = false;
    }
  }

  cancelQuestion() {
    this.newQuestion = { text: '', type: 'paragraph' };
    this.showQuestionForm = false;
  }

  save() {
    console.log('Form saved:', {
      title: this.formTitle,
      description: this.formDescription,
      questions: this.questions,
    });
    // Implement actual save logic here
  }

  cancel() {
    this.close.emit();
  }
}
