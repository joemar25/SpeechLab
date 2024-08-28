import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Question {
  text: string;
  type: 'paragraph' | 'short-answer';
}
@Component({
  selector: 'app-course-create-survey',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './course-create-survey.component.html',
  styleUrl: './course-create-survey.component.css'
})
export class CourseCreateSurveyComponent {
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
    // Implement cancel logic here
    console.log('Form cancelled');
  }
}
