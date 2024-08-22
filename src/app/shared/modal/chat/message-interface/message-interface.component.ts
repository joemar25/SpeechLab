import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-interface',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-interface.component.html',
  styleUrl: './message-interface.component.css'
})
export class MessageInterfaceComponent implements OnInit {
  selectedChat: { type: string, name: string, class: string } = { type: '', name: '', class: '' };
  newMessage: string = '';

  messages = [
    { sender: 'teacher', text: 'Welcome to the class!', time: '2 minutes ago' },
    { sender: 'student', text: 'Thank you!', time: '1 minute ago' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedChat.type = params['type'];
      this.selectedChat.name = params['name'];
      this.selectedChat.class = params['class'];
    });
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