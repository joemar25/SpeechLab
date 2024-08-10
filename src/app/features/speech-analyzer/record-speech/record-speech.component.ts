import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-record-speech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './record-speech.component.html',
  styleUrl: './record-speech.component.css'
})
export class RecordSpeechComponent {
  isRecording: boolean = false;
  recordingComplete: boolean = false;
  currentPhase: 'register' | 'question' | 'transcript' = 'register';

  constructor(private router: Router) {}

  toggleRecording() {
    if (this.isRecording) {
      // Stop recording
      this.isRecording = false;
      this.recordingComplete = true;
      // Here you would typically stop the actual recording process
    } else {
      // Start recording
      this.isRecording = true;
      this.recordingComplete = false;
      // Here you would typically start the actual recording process
    }
  }

  redo() {
    if (this.currentPhase === 'transcript') {
      // If we're in the transcript phase, go back to the question phase
      this.currentPhase = 'question';
    }
    this.recordingComplete = false;
    this.isRecording = false;
    // Here you would typically reset the recording process
  }

  next() {
    if (this.currentPhase === 'register') {
      this.currentPhase = 'question';
      this.recordingComplete = false;
      this.isRecording = false;
    } else if (this.currentPhase === 'question') {
      this.currentPhase = 'transcript';
    } else {
      // Navigate to the speech-analyzer/record-report route
      this.router.navigate(['/speech-analyzer/record-report']);
    }
  }
}
