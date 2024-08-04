import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  studentProfile = {
    name: 'Juan Dela Cruz',
    idNo: '232424242',
    nationality: 'Filipino',
    address: 'Legazpi City, Albay',
    dateOfBirth: 'January 09, 2024',
    sex: 'Male',
    emailAddress: 'quanbyit.com'
  };

  teacherFeedback = {
    course: 'DOJ Certification',
    teacher: 'Michael Maxwell',
    date: 'July 27, 2024',
    feedback: 'Great work on your recent assignments. You have shown significant improvement in your speaking skills. Keep practicing the exercises provided.'
  };

  courses = [
    { name: 'DOJ CERTIFICATE', progress: 75 },
    { name: 'DOJ CERTIFICATE', progress: 50 }
  ];

  sexOptions = ['Male', 'Female', 'Transgender'];

  viewAllFeedbacks() {
    console.log('Viewing all feedbacks');
  }

  updateProfileInfo() {
    console.log('Updating profile information');
  }

  updateCourseProgress(courseName: string, newProgress: number) {
    console.log(`Updating progress for ${courseName} to ${newProgress}%`);
  }
}