import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseDetailModalComponent } from '../../../modal/course-detail-modal/course-detail-modal.component';
import { CourseService,Course } from '../../../../core/services/CourseService/course.service';

interface Category {
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-teacher-led',
  standalone: true,
  imports: [CommonModule, RouterModule, CourseDetailModalComponent],
  templateUrl: './teacher-led.component.html',
  styleUrl: './teacher-led.component.css'
})
export class TeacherLedComponent implements OnInit {
  category: Category[] = [
    { title: 'DOJ Certification', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca7133769e4230d9449453acda1bec6cb23a47f9127101accda6999bc4695dfb?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea' },
    { title: 'Prompt Engineering', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7603dd23ddd3ea7fe6b5e068c65af97be9f56f7f21f95c1e93b0f1889b2976bf?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea' },
    { title: 'Introduction to Cyber Security', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1845a376e9c29201edcd02dd6e4832a24e35a9903cee1e63b59dd097aa949e2?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea' },
    { title: 'AI Ethics', imageUrl: 'https://example.com/ai-ethics.jpg' },
    { title: 'Machine Learning Basics', imageUrl: 'https://example.com/ml-basics.jpg' },
    { title: 'Data Science Fundamentals', imageUrl: 'https://example.com/data-science.jpg' },
  ];

  displayedCategories: Category[] = [];
  animationClass = '';
  isAnimating = false;

  difficulty: string[] = ['All courses', 'Beginner', 'Intermediate', 'Advanced'];
  selectedDifficulty: string = 'All courses';

  courses: Course[] = [
    {
      title: 'DOJ Certification',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca7133769e4230d9449453acda1bec6cb23a47f9127101accda6999bc4695dfb?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      instructor: 'Michael Maxwell',
      instructorImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca7133769e4230d9449453acda1bec6cb23a47f9127101accda6999bc4695dfb?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      progress: 25,
      level: 'Intermediate',
      duration: 200,
      rating: 4.5,
      difficulty: 'Intermediate',
      tasks: [
        'Complete introductory module',
        'Submit initial assignment',
        'Attend review session'
      ]
    },
    {
      title: 'Prompt Engineering',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7603dd23ddd3ea7fe6b5e068c65af97be9f56f7f21f95c1e93b0f1889b2976bf?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      instructor: 'Michael Maxwell',
      instructorImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7603dd23ddd3ea7fe6b5e068c65af97be9f56f7f21f95c1e93b0f1889b2976bf?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      progress: 25,
      level: 'Intermediate',
      duration: 200,
      rating: 4.5,
      difficulty: 'Intermediate',
      tasks: [
        'Complete the prompt design exercise',
        'Submit prompt review',
        'Participate in prompt optimization workshop'
      ]
    },
    {
      title: 'Introduction to Cyber Security',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1845a376e9c29201edcd02dd6e4832a24e35a9903cee1e63b59dd097aa949e2?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      instructor: 'Michael Maxwell',
      instructorImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1845a376e9c29201edcd02dd6e4832a24e35a9903cee1e63b59dd097aa949e2?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      progress: 25,
      level: 'Beginner',
      duration: 200,
      rating: 4.5,
      difficulty: 'Beginner',
      tasks: [
        'Complete basic cybersecurity concepts module',
        'Participate in security threat analysis exercise',
        'Submit final project on security best practices'
      ]
    }
  ];
  
  displayedCourses: Course[] = [];

  selectedCourse: Course | null = null;

  constructor(private cdr: ChangeDetectorRef, private courseService: CourseService) {
    this.updateDisplayedCategories();
    this.filterCourses();
  }

  ngOnInit() {
    this.courseService.updateCourses(this.courses);
  }

  updateDisplayedCategories() {
    this.displayedCategories = [
      ...this.category.slice(-1),
      ...this.category,
      ...this.category.slice(0, 1)
    ];
  }

  moveCourses(direction: 'prev' | 'next') {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.animationClass = direction === 'prev' ? 'slide-right' : 'slide-left';
    
    setTimeout(() => {
      if (direction === 'prev') {
        const lastItem = this.category.pop()!;
        this.category.unshift(lastItem);
      } else {
        const firstItem = this.category.shift()!;
        this.category.push(firstItem);
      }
      this.updateDisplayedCategories();
      this.animationClass = '';
      this.isAnimating = false;
      this.cdr.detectChanges();
    }, 500); // This should match the animation duration in CSS
  }

  filterCourses() {
    this.displayedCourses = this.selectedDifficulty === 'All courses'
      ? this.courses
      : this.courses.filter(course => course.difficulty === this.selectedDifficulty);
  }

  onDifficultyChange(newDifficulty: string) {
    this.selectedDifficulty = newDifficulty;
    this.filterCourses();
  }

  openModal(course: Course) {
    this.selectedCourse = course;
  }

  closeModal() {
    this.selectedCourse = null;
  }
}