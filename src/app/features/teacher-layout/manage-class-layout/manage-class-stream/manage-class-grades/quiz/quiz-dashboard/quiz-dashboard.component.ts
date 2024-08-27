import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz-dashboard',
  standalone: true,
  imports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './quiz-dashboard.component.html',
  styleUrl: './quiz-dashboard.component.css'
})
export class QuizDashboardComponent {
  quiz=[
    { 
      id: 1,
      title:'Quiz 1',
      due:'August 22, 2022 11:59 PM'
    },
    {
      id: 2,
      title:'Quiz 2',
      due:'August 22, 2022 11:59 PM'
    },
    {
      id: 3,
      title:'Quiz 3',
      due:'August 22, 2022 11:59 PM'
    },

  ]
}
