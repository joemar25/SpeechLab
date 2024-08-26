import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.css'
})
export class QuizResultComponent implements OnInit{
  quizId: string | null = null;
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
  }
  users = [
    {
      name: 'John Doe',
      grade: '67.72/100',
      state: 'Wednesday, 22 May 2024, 1:45 PM',
      marks: 41.00
    }
  ]
}
