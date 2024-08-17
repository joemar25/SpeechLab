import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  imports: [CommonModule, FormsModule]
})
export class TaskDetailComponent {
  lesson = {
    title: 'What is Cyber Security?',
    instructor: 'Michael Maxwell',
    date: '2024-07-08',
    dueDate: 'Due July 10, 11:59 PM',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/175a9cd8db2e790c5f7f616834083cd240f530b1e1a1d197775f040f18d5f525?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea',
    question: 'What is the primary objective of cybersecurity?',
    options: [
      'To increase internet speed',
      'To ensure software runs smoothly',
      'To protect systems, networks, and data from digital attacks',
      'To design websites'
    ],
    attachments: [
      {
        name: 'Cybersecurity_Basics.pdf',
        type: 'PDF',
        icon: 'https://cdn-icons-png.flaticon.com/512/337/337946.png'
      },
      {
        name: 'Assignment_Guidelines.docx',
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

  workStatus = 'Missing';

  newClassComment: string = '';
  classComments = [
    {
      user: {
        name: 'John Doe',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
      },
      comment: 'This was a very informative lesson!'
    }
  ];

  newPrivateComment: string = '';
  privateComments = [
    {
      user: {
        name: 'You',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
      },
      comment: 'I need more time to understand the material.'
    }
  ];

  uploadedFile: { name: string, thumbnail: string } | null = null;

  // Define default thumbnails for different file types
  defaultThumbnails: { [key: string]: string } = {
    'pdf': 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
    'doc': 'https://cdn-icons-png.flaticon.com/512/337/337932.png',
    'docx': 'https://cdn-icons-png.flaticon.com/512/337/337932.png',
    'xls': 'https://cdn-icons-png.flaticon.com/512/337/337959.png',
    'xlsx': 'https://cdn-icons-png.flaticon.com/512/337/337959.png',
    'ppt': 'https://cdn-icons-png.flaticon.com/512/337/337958.png',
    'pptx': 'https://cdn-icons-png.flaticon.com/512/337/337958.png',
    'jpg': 'https://cdn-icons-png.flaticon.com/512/337/337940.png',
    'jpeg': 'https://cdn-icons-png.flaticon.com/512/337/337940.png',
    'png': 'https://cdn-icons-png.flaticon.com/512/337/337948.png',
    'gif': 'https://cdn-icons-png.flaticon.com/512/337/337936.png',
    'mp4': 'https://cdn-icons-png.flaticon.com/512/337/337944.png',
    'mp3': 'https://cdn-icons-png.flaticon.com/512/337/337943.png',
    'default': 'https://cdn-icons-png.flaticon.com/512/337/337938.png' // Default icon for unknown file types
  };

  addClassComment() {
    if (this.newClassComment.trim()) {
      this.classComments.push({
        user: {
          name: 'You',
          avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        },
        comment: this.newClassComment
      });
      this.newClassComment = '';
    }
  }

  submitPrivateComment() {
    if (this.newPrivateComment.trim()) {
      this.privateComments.push({
        user: {
          name: 'You',
          avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        },
        comment: this.newPrivateComment
      });
      this.newPrivateComment = '';
    }
  }

  handleFileUpload(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const fileExtension = file.name.split('.').pop()?.toLowerCase() || 'default';
      
      this.uploadedFile = {
        name: file.name,
        thumbnail: this.defaultThumbnails[fileExtension] || this.defaultThumbnails['default']
      };

      this.workStatus = 'Submitted';
    }
  }
}