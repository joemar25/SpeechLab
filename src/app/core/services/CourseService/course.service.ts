import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Course {
  title: string;
  imageUrl: string;
  instructor: string;
  instructorImage: string;
  progress: number;
  level: string;
  duration: number;
  rating: number;
  difficulty: string;
  tasks: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesSource = new BehaviorSubject<Course[]>([]);
  courses$ = this.coursesSource.asObservable();

  updateCourses(courses: Course[]) {
    this.coursesSource.next(courses);
  }
}