import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  showChatModal: boolean = true; // Set to true for demonstration
  selectedClass: string = 'Math 101'; // Example class name
  newMessage: string = '';

  // Example data for teachers, classmates, and messages
  teachers = [
    { name: 'Mr. Smith', subject: 'Algebra' },
    { name: 'Mrs. Johnson', subject: 'Geometry' }
  ];

  classmates = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' },
    { name: 'David' }
  ];

  messages = [
    { sender: 'teacher', text: 'Welcome to the class!', time: '2 minutes ago' },
    { sender: 'student', text: 'Thank you!', time: '1 minute ago' }
  ];

  closeChatModal() {
    this.showChatModal = false;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'student',
        text: this.newMessage,
        time: 'Just now'
      });
      this.newMessage = '';
    }
  }
}