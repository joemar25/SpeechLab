import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from "../../modal/student-profile/student-profile.component";
import { trigger, transition, style, animate } from '@angular/animations';
import { NotificationService } from '../../../../app-services/modal-services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, StudentProfileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [  
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class UserProfileComponent implements OnInit, OnDestroy{
  constructor(
    public notificationService: NotificationService
  ) { }
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

  openEdit = false;
  success = false;
  noChanges = false;
  private successSubscription!: Subscription;
  private noChangesSubscription!: Subscription;
  editProfile() {
    this.openEdit = !this.openEdit
  }
  ngOnInit() {
    this.successSubscription = this.notificationService.success$.subscribe(
      value => this.success = value
    );
    this.noChangesSubscription = this.notificationService.noChanges$.subscribe(
      value => this.noChanges = value
    );
  }

  ngOnDestroy() {
    this.successSubscription?.unsubscribe();
    this.noChangesSubscription?.unsubscribe();
  }

  closeEdit() {
    this.openEdit = false;
  }
}