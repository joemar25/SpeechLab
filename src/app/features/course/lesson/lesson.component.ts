import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson',
  standalone: true,
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LessonComponent {
  // Mock data for the lesson
  lesson = {
    title: 'Lesson 1: Introduction to Cyber Security',
    instructor: 'Michael Maxwell',
    date: '2024-07-08',
    description: 'Understanding the basics of cybersecurity is crucial in today\'s digital world. This lesson will cover the primary objectives of cybersecurity and its importance in protecting systems, networks, and data from digital attacks.',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/175a9cd8db2e790c5f7f616834083cd240f530b1e1a1d197775f040f18d5f525?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
    attachments: [
      {
        name: 'Cybersecurity_Basics.pdf',
        type: 'PDF',
        icon: 'https://cdn-icons-png.flaticon.com/512/337/337946.png'
      },
      {
        name: 'Lesson_Overview.docx',
        type: 'Word Document',
        icon: 'https://cdn-icons-png.flaticon.com/512/337/337932.png'
      },
      {
        name: 'Cyber_Threats_Overview.pptx',
        type: 'PowerPoint',
        icon: 'https://cdn-icons-png.flaticon.com/512/337/337958.png'
      }
    ]
  };

  // Mock data for comments with user information
  classComments = [
    {
      user: {
        name: 'John Doe',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
      },
      comment: 'Great introduction!'
    },
    {
      user: {
        name: 'Jane Smith',
        avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'
      },
      comment: 'I found this lesson very informative.'
    }
  ];

  privateComments = [
    {
      user: {
        name: 'Alex Johnson',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
      },
      comment: 'Need to review the concepts in detail.'
    }
  ];

  // New comment inputs
  newClassComment: string = '';
  newPrivateComment: string = '';

  // Method to add a new class comment
  addClassComment() {
    if (this.newClassComment.trim()) {
      this.classComments.push({
        user: {
          name: 'You',
          avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        },
        comment: this.newClassComment
      });
      this.newClassComment = ''; // Reset the input field
    }
  }

  // Method to add a new private comment
  addPrivateComment() {
    if (this.newPrivateComment.trim()) {
      this.privateComments.push({
        user: {
          name: 'You',
          avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        },
        comment: this.newPrivateComment
      });
      this.newPrivateComment = ''; // Reset the input field
    }
  }
}
