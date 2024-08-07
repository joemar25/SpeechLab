import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
interface Task {
  id: number;
  title: string;
  type: 'quiz' | 'assignment' | 'other';
  dueDate: string;
  status: 'done' | 'ongoing' | 'todo' | 'late' | 'missing';
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  courseTitle = 'Introduction to Cyber Security';
  instructor = 'Michael Maxwell';
  meetingTime = '8:00AM- 9:30PM';
  currentDate = new Date('2023-07-10'); // Simulating current date for demo purposes

  tasks: Task[] = [
    { id: 1, title: 'Cyber Security Basics Quiz', type: 'quiz', dueDate: '2023-07-09', status: 'done' },
    { id: 2, title: 'Network Security Essay', type: 'assignment', dueDate: '2023-07-15', status: 'ongoing' },
    { id: 3, title: 'Cryptography Methods Research', type: 'assignment', dueDate: '2023-07-20', status: 'todo' },
    { id: 4, title: 'Midterm Exam', type: 'quiz', dueDate: '2023-07-30', status: 'todo' },
    { id: 5, title: 'Cyber Threat Analysis', type: 'other', dueDate: '2023-07-05', status: 'missing' }
  ];

  // Icons
  quizIconUrl = 'https://cdn-icons-png.flaticon.com/512/5692/5692030.png';
  assignmentIconUrl = 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png';
  otherTaskIconUrl = 'https://cdn-icons-png.flaticon.com/512/1950/1950715.png';
  meetIconUrl = 'https://cdn-icons-png.flaticon.com/512/3176/3176371.png';
  moreIconUrl = 'https://cdn-icons-png.flaticon.com/512/512/512222.png';

  getIconUrl(taskType: string): string {
    switch (taskType) {
      case 'quiz': return this.quizIconUrl;
      case 'assignment': return this.assignmentIconUrl;
      default: return this.otherTaskIconUrl;
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'done': return 'text-green-600';
      case 'ongoing': return 'text-blue-600';
      case 'todo': return 'text-gray-600';
      case 'late': return 'text-orange-600';
      case 'missing': return 'text-red-600';
      default: return 'text-black';
    }
  }
}