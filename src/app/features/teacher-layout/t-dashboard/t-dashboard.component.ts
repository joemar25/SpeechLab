import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from "../../../shared/modal/notification/notification.component";
import { Subscription } from 'rxjs';
import { NotificationService } from '../../../../app-services/modal-services/notification.service';
import { trigger, transition, style, animate } from '@angular/animations';

interface LanguageProgress {
  language: string;
  progress: number;
}

interface Task {
  title: string;
  description: string;
  actionText: string;
}

interface Announcement {
  title: string;
  type: 'Text' | 'Audio';
  content: string;
  postedDate: string;
  audioDuration?: string;
}

interface Course {
  title: string;
  imageUrl: string;
  instructor: string;
  schedule: string;
}

@Component({
  selector: 'app-t-dashboard',
  standalone: true,
  imports: [CommonModule, NotificationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './t-dashboard.component.html',
  styleUrls: ['./t-dashboard.component.css'],
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
export class TDashboardComponent {
  
  pageTitle = "Self-Assessment Progress";

  welcomeMessage = {
    title: "Welcome to your CSU Speech Lab Dashboard!",
    content: "Unlock your potential, manage your sessions, and access exclusive resources to enhance your communication skills. Your journey to excellence starts here!"
  };

  languageProgress: LanguageProgress[] = [
    { language: 'English', progress: 75 },
    { language: 'French', progress: 50 },
    { language: 'Japanese', progress: 25 }
  ];

  tasks: Task[] = [
    {
      title: 'Pronunciation Exercise',
      description: 'Practice vowel sounds and intonation patterns',
      actionText: 'Take Quiz'
    },
    {
      title: 'Writing Assignment',
      description: 'Submit a 500-word essay on global warming',
      actionText: 'Submit Assignment'
    },
    {
      title: 'Grammar Lecture',
      description: 'Watch video on advanced verb tenses',
      actionText: 'Watch Video'
    },
    {
      title: 'Speaking Session',
      description: 'Attend live group discussion on current events',
      actionText: 'Join Session'
    }
  ];

  announcements: Announcement[] = [
    {
      title: 'New Course Available!',
      type: 'Text',
      content: 'Explore our new "Business English" course starting next week. Enhance your professional communication skills!',
      postedDate: '1 day ago'
    },
    {
      title: "Director's Message",
      type: 'Audio',
      content: 'Listen to an important update about the upcoming semester and new learning opportunities.',
      postedDate: '2 days ago',
      audioDuration: '2:30'
    },
    {
      title: 'Speaking Contest Announcement',
      type: 'Text',
      content: 'Join our monthly speaking contest and showcase your English skills! Exciting prizes await the winners.',
      postedDate: '3 days ago'
    }
  ];

  coursesEnrolled: Course[] = [
    {
      title: 'English Conversation Skills',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca7133769e4230d9449453acda1bec6cb23a47f9127101accda6999bc4695dfb?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      instructor: 'Dr. Sarah Johnson',
      schedule: 'Mon, Wed 10:00 AM - 11:30 AM'
    },
    {
      title: 'Advanced Grammar',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7603dd23ddd3ea7fe6b5e068c65af97be9f56f7f21f95c1e93b0f1889b2976bf?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      instructor: 'Prof. Michael Brown',
      schedule: 'Tue, Thu 2:00 PM - 3:30 PM'
    },
    {
      title: 'TOEFL Preparation',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1845a376e9c29201edcd02dd6e4832a24e35a9903cee1e63b59dd097aa949e2?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
      instructor: 'Ms. Emily Chen',
      schedule: 'Fri 9:00 AM - 12:00 PM'
    },
    {
      title: 'English for Academic Purposes',
      imageUrl: 'https://placehold.co/60x60',
      instructor: 'Dr. Robert Lee',
      schedule: 'Mon, Wed, Fri 3:00 PM - 4:30 PM'
    }
  ];

  startTask(task: Task) {
    console.log(`Starting task: ${task.title}`);
    // Implement the logic to start the task
  }

  playAudio(announcement: Announcement) {
    if (announcement.type === 'Audio') {
      console.log(`Playing audio: ${announcement.title}`);
      // Implement the logic to play the audio
    }
  }

  
}