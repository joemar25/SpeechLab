import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseService, Course } from '../../../core/services/CourseService/course.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  selectedLevel = 'All';
  difficultyLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.courses$.subscribe(courses => {
      this.courses = courses;
      this.filterCourses(this.selectedLevel);
    });
  }

  filterCourses(level: string) {
    this.selectedLevel = level;
    if (level === 'All') {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course => course.difficulty === level);
    }
  }
}