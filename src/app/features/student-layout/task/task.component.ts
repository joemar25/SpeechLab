import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  courses = [
    { title: 'DOJ Certification', level: 'Beginner', tasks: ['Complete introductory module', 'Submit initial assignment', 'Attend review session'] },
    { title: 'Prompt Engineering', level: 'Intermediate', tasks: ['Complete the prompt design exercise', 'Submit prompt review', 'Participate in prompt optimization workshop'] },
    { title: 'Machine Learning Basics', level: 'Advanced', tasks: ['Complete basic ML algorithm tutorial', 'Implement ML model in a project', 'Review ML model performance'] }
  ];

  filteredCourses = this.courses;
  selectedLevel = 'All';

  filterCourses(level: string) {
    this.selectedLevel = level;
    if (level === 'All') {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course => course.level === level);
    }
  }
}
