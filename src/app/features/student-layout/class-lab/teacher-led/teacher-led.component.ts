import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  title: string;
  imageUrl: string;
}

interface Course {
  title: string;
  imageUrl: string;
  instructor: string;
  instructorImage: string;
  progress: number;
  level: string;
  duration: number;
  rating: number;
}

@Component({
  selector: 'app-teacher-led',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-led.component.html',
  styleUrl: './teacher-led.component.css'
})
export class TeacherLedComponent {
  category: Category[] = [
    { title: 'DOJ Certification', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca7133769e4230d9449453acda1bec6cb23a47f9127101accda6999bc4695dfb?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea' },
    { title: 'Prompt Engineering', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7603dd23ddd3ea7fe6b5e068c65af97be9f56f7f21f95c1e93b0f1889b2976bf?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea' },
    { title: 'Introduction to Cyber Security', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1845a376e9c29201edcd02dd6e4832a24e35a9903cee1e63b59dd097aa949e2?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea' },
    { title: 'AI Ethics', imageUrl: 'https://example.com/ai-ethics.jpg' },
    { title: 'Machine Learning Basics', imageUrl: 'https://example.com/ml-basics.jpg' },
    { title: 'Data Science Fundamentals', imageUrl: 'https://example.com/data-science.jpg' },
    // Add more courses as needed
  ];

  displayedCourses: Category[] = [];
  animationClass = '';
  isAnimating = false;



  difficulty: string[] = ['All courses', 'Beginner', 'Intermediate', 'Advanced'];

  courses: Course[] = [
    {
      title: 'DOJ Certification',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca7133769e4230d9449453acda1bec6cb23a47f9127101accda6999bc4695dfb?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      instructor: 'Michael Maxwell',
      instructorImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca7133769e4230d9449453acda1bec6cb23a47f9127101accda6999bc4695dfb?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      progress: 25,
      level: 'Intermediate',
      duration: 200,
      rating: 4.5
    },
    {
      title: 'Prompt Engineering',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7603dd23ddd3ea7fe6b5e068c65af97be9f56f7f21f95c1e93b0f1889b2976bf?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      instructor: 'Michael Maxwell',
      instructorImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7603dd23ddd3ea7fe6b5e068c65af97be9f56f7f21f95c1e93b0f1889b2976bf?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      progress: 25,
      level: 'Intermediate',
      duration: 200,
      rating: 4.5
    },
    {
      title: 'Introduction to Cyber Security',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1845a376e9c29201edcd02dd6e4832a24e35a9903cee1e63b59dd097aa949e2?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      instructor: 'Michael Maxwell',
      instructorImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1845a376e9c29201edcd02dd6e4832a24e35a9903cee1e63b59dd097aa949e2?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      progress: 25,
      level: 'Intermediate',
      duration: 200,
      rating: 4.5
    },
    {
      title: 'Introduction to Cyber Security',
      imageUrl: 'https://example.com/intro-cyber-security.jpg',
      instructor: 'Michael Maxwell',
      instructorImage: 'https://example.com/michael-maxwell.jpg',
      progress: 25,
      level: 'Beginner',
      duration: 200,
      rating: 4.5
    }
    // Add more courses as needed
  ];
  constructor(private cdr: ChangeDetectorRef) {
    this.updateDisplayedCourses();
  }

  updateDisplayedCourses() {
    this.displayedCourses = [
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
        this.category.unshift(this.category.pop()!);
      } else {
        this.category.push(this.category.shift()!);
      }
      this.updateDisplayedCourses();
      this.animationClass = '';
      this.isAnimating = false;
      this.cdr.detectChanges();
    }, 500); // This should match the animation duration in CSS
  }
}


