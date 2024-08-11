
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Task {
  id: number;
  title: string;
  itemType: 'task';
  dueDate: string;
  status: 'todo' | 'done' | 'in progress' | 'missing';
}

interface Lesson {
  id: number;
  title: string;
  itemType: 'lesson';
  duration: string;
  status: 'completed' | 'not started' | 'in progress';
}

type LessonOrTask = Lesson | Task;


@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  courseTitle = 'Introduction to Cyber Security';
  instructor = 'Michael Maxwell';
  meetingTime = '8:00AM- 9:30PM';
  currentDate = new Date('2023-07-15'); // Set to a specific date for demonstration

  lessonsAndTasks: LessonOrTask[] = [
    { id: 1, title: 'Cyber Security Basics Quiz', itemType: 'task', dueDate: '2023-07-10', status: 'done' },
    { id: 2, title: 'Network Security Essay', itemType: 'task', dueDate: '2023-07-20', status: 'in progress' },
    { id: 3, title: 'Introduction to Cyber Security', itemType: 'lesson', duration: '1h 30m', status: 'completed' },
    { id: 4, title: 'Cryptography Methods Research', itemType: 'task', dueDate: '2023-07-25', status: 'todo' },
    { id: 5, title: 'Network Security Fundamentals', itemType: 'lesson', duration: '2h', status: 'in progress' },
    { id: 6, title: 'Midterm Exam', itemType: 'task', dueDate: '2023-07-14', status: 'todo' },
    { id: 7, title: 'Cryptography Basics', itemType: 'lesson', duration: '1h 45m', status: 'not started' },
  ];

  get upcomingTasks(): Task[] {
    return this.lessonsAndTasks
      .filter((item): item is Task => item.itemType === 'task')
      .map(task => ({
        ...task,
        status: this.getTaskStatus(task)
      }))
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
      .slice(0, 5);
  }

  meetIconUrl = 'https://cdn-icons-png.flaticon.com/512/3176/3176371.png';
  moreIconUrl = 'https://cdn-icons-png.flaticon.com/512/512/512222.png';

  getTaskStatus(task: Task): Task['status'] {
    const dueDate = new Date(task.dueDate);
    if (task.status === 'done') {
      return 'done';
    } else if (dueDate < this.currentDate) {
      return 'missing';
    }
    return task.status;
  }

  getItemIcon(itemType: 'lesson' | 'task'): string {
    if (itemType === 'lesson') {
      return `data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='35.4408' cy='34.7408' rx='34.5228' ry='34.5651' fill='%23162239'/%3E%3Cpath d='M48.2695 17.8652H22.0195C19.957 17.8652 18.2695 19.5527 18.2695 21.6152V47.8652C18.2695 49.9277 19.957 51.6152 22.0195 51.6152H48.2695C50.332 51.6152 52.0195 49.9277 52.0195 47.8652V21.6152C52.0195 19.5527 50.332 17.8652 48.2695 17.8652ZM38.8945 44.1152H25.7695V40.3652H38.8945V44.1152ZM44.5195 36.6152H25.7695V32.8652H44.5195V36.6152ZM44.5195 29.1152H25.7695V25.3652H44.5195V29.1152Z' fill='%23F5A425'/%3E%3C/svg%3E`;
    } else {
      return `data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='35.4408' cy='34.8991' rx='34.5228' ry='34.5651' fill='%23162239'/%3E%3Cpath d='M47.9401 14.0645H22.9401C20.6484 14.0645 18.7734 15.9395 18.7734 18.2311V51.5645C18.7734 53.8561 20.6484 55.7311 22.9401 55.7311H47.9401C50.2318 55.7311 52.1068 53.8561 52.1068 51.5645V18.2311C52.1068 15.9395 50.2318 14.0645 47.9401 14.0645ZM22.9401 18.2311H33.3568V34.8978L28.1484 31.7728L22.9401 34.8978V18.2311Z' fill='%23F5A425'/%3E%3C/svg%3E`;
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'done':
      case 'completed': return 'text-green-600';
      case 'in progress': return 'text-blue-600';
      case 'todo':
      case 'not started': return 'text-gray-600';
      case 'missing': return 'text-red-600';
      default: return 'text-black';
    }
  }

  getItemDetails(item: LessonOrTask): string {
    if (item.itemType === 'task') {
      return `Due: ${this.formatDate(item.dueDate)}`;
    } else {
      return `Duration: ${item.duration}`;
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  toggleTaskStatus(task: Task) {
    if (task.status === 'todo') {
      task.status = 'in progress';
    } else if (task.status === 'in progress') {
      task.status = 'done';
    }
    // If it's 'done' or 'missing', we don't change the status
  }
}