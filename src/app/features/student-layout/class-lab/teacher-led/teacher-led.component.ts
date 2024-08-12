import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailModalComponent } from '../../../modal/course-detail-modal/course-detail-modal.component';

interface Category {
rating: any;
duration: any;
level: any;
instructor: any;
instructorImage: any;
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
  difficulty: string; 
}

@Component({
  selector: 'app-teacher-led',
  standalone: true,
  imports: [CommonModule, CourseDetailModalComponent],
  templateUrl: './teacher-led.component.html',
  styleUrl: './teacher-led.component.css'
})
export class TeacherLedComponent {
  category: Category[] = [
    {
      title: 'DOJ Certification', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca7133769e4230d9449453acda1bec6cb23a47f9127101accda6999bc4695dfb?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      rating: undefined,
      duration: undefined,
      level: undefined,
      instructor: undefined,
      instructorImage: undefined
    },
    {
      title: 'Prompt Engineering', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7603dd23ddd3ea7fe6b5e068c65af97be9f56f7f21f95c1e93b0f1889b2976bf?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      rating: undefined,
      duration: undefined,
      level: undefined,
      instructor: undefined,
      instructorImage: undefined
    },
    {
      title: 'Introduction to Cyber Security', imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1845a376e9c29201edcd02dd6e4832a24e35a9903cee1e63b59dd097aa949e2?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      rating: undefined,
      duration: undefined,
      level: undefined,
      instructor: undefined,
      instructorImage: undefined
    },
    {
      title: 'AI Ethics', imageUrl: 'https://example.com/ai-ethics.jpg',
      rating: undefined,
      duration: undefined,
      level: undefined,
      instructor: undefined,
      instructorImage: undefined
    },
    {
      title: 'Machine Learning Basics', imageUrl: 'https://example.com/ml-basics.jpg',
      rating: undefined,
      duration: undefined,
      level: undefined,
      instructor: undefined,
      instructorImage: undefined
    },
    {
      title: 'Data Science Fundamentals', imageUrl: 'https://example.com/data-science.jpg',
      rating: undefined,
      duration: undefined,
      level: undefined,
      instructor: undefined,
      instructorImage: undefined
    },
    // Add more courses as needed
  ];

  displayedCourses: Category[] = [];
  animationClass = '';
  isAnimating = false;



  difficulty: string[] = ['All courses', 'Beginner', 'Intermediate', 'Advanced'];
  selectedDifficulty: string = 'All courses'; // Default to show all courses

  filterCourses() {
    if (this.selectedDifficulty === 'All courses') {
      this.displayedCourses = this.courses;
    } else {
      this.displayedCourses = this.courses.filter(course => course.difficulty === this.selectedDifficulty);
    }
  }
  

// Call this function whenever the difficulty is changed
onDifficultyChange(newDifficulty: string) {
  this.selectedDifficulty = newDifficulty;
  this.filterCourses();
}

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
      difficulty: 'Intermediate'
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
      difficulty: 'Intermediate'
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
      difficulty: 'Beginner'
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
  selectedCourse: any | null = null;

  openModal(course: any) {
    this.selectedCourse = course;
  }

  closeModal() {
    this.selectedCourse = null;
  }
}


