import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  sender: string;
  avatar: string;
  time: string;
  message: string;
}

@Component({
  selector: 'app-video-conference',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './video-conference.component.html',
  styleUrl: './video-conference.component.css'
})
export class VideoConferenceComponent implements OnInit {
  meetingJoined = false;
  participantCount = 0;
  chatMessages: ChatMessage[] = [];
  newMessage = '';

  // New properties for video controls
  isMicOn: boolean = true;
  isVideoOn: boolean = true;
  isScreenShared: boolean = false;

  ngOnInit() {
    this.loadMockChatMessages();
  }

  joinMeeting() {
    this.meetingJoined = true;
    this.participantCount = 1;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const newChatMessage: ChatMessage = {
        sender: 'You',
        avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a8cd93cfbc575632fd625e94e2e2aada9971a2f7a8dc8a17fb01c8ab4c452882?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        message: this.newMessage.trim()
      };
      this.chatMessages.push(newChatMessage);
      this.newMessage = '';
    }
  }

  private loadMockChatMessages() {
    this.chatMessages = [
      {
        sender: 'You',
        avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a8cd93cfbc575632fd625e94e2e2aada9971a2f7a8dc8a17fb01c8ab4c452882?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843',
        time: '3:22 PM',
        message: 'Hello'
      },
      {
        sender: 'John',
        avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/28447851b8acd8d9feca280325d6649abc84864e0b549bb8d26393e0fad1a914?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843',
        time: '3:23 PM',
        message: 'Hi there!'
      }
    ];
  }

  // New methods for video controls
  toggleMic() {
    this.isMicOn = !this.isMicOn;
    // Add logic to actually toggle the microphone
    console.log('Microphone toggled:', this.isMicOn ? 'on' : 'off');
  }

  toggleVideo() {
    this.isVideoOn = !this.isVideoOn;
    // Add logic to actually toggle the video
    console.log('Video toggled:', this.isVideoOn ? 'on' : 'off');
  }

  toggleScreenShare() {
    this.isScreenShared = !this.isScreenShared;
    // Add logic to actually toggle screen sharing
    console.log('Screen sharing toggled:', this.isScreenShared ? 'on' : 'off');
  }

  endCall() {
    // Add logic to end the call
    console.log('Call ended');
    this.meetingJoined = false;
    this.participantCount = 0;
  }
}