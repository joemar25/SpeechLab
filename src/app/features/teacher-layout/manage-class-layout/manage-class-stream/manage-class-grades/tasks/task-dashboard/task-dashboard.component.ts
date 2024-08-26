import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.css'
})
export class TaskDashboardComponent {
  tasks = [
    {
      id: 1,
      title: 'Task no.1',
      dueDate: 'August 22, 2022 11:59 PM',
      turnedIn: 0,
      notSubmitted: 35    },
    {
      id: 2,
      title: 'Task no.2',
      dueDate: 'August 23, 2022 11:59 PM',
      turnedIn: 3,
      notSubmitted: 35    },
    {
      id: 3,
      title: 'Task no.3',
      dueDate: 'August 24, 2022 11:59 PM',
      turnedIn: 5,
      notSubmitted: 35    },
    {
      id: 4,
      title: 'Task no.4',
      dueDate: 'August 25, 2022 11:59 PM',
      turnedIn: 8,
      notSubmitted: 35    },
    {
      id: 5,
      title: 'Task no.5',
      dueDate: 'August 26, 2022 11:59 PM',
      turnedIn: 10,
      notSubmitted: 35    },
    {
      id: 6,
      title: 'Task no.6',
      dueDate: 'August 27, 2022 11:59 PM',
      turnedIn: 7,
      notSubmitted: 35    },
    {
      id: 7,
      title: 'Task no.7',
      dueDate: 'August 28, 2022 11:59 PM',
      turnedIn: 4,
      notSubmitted: 35    },
    {
      id: 8,
      title: 'Task no.8',
      dueDate: 'August 29, 2022 11:59 PM',
      turnedIn: 2,
      notSubmitted: 35    },
    {
      id: 9,
      title: 'Task no.9',
      dueDate: 'August 30, 2022 11:59 PM',
      turnedIn: 6,
      notSubmitted: 35    },
    {
      id: 10,
      title: 'Task no.10',
      dueDate: 'August 31, 2022 11:59 PM',
      turnedIn: 9,
      notSubmitted: 35    },
    {
      id: 11,
      title: 'Task no.11',
      dueDate: 'September 1, 2022 11:59 PM',
      turnedIn: 0,
      notSubmitted: 35
    },
    {
      id: 12,
      title: 'Task no.12',
      dueDate: 'September 2, 2022 11:59 PM',
      turnedIn: 5,
      notSubmitted: 35    }
  ];
  
}
