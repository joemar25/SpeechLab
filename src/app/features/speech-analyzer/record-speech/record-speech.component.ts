import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
      // Here you would handle moving to the next step or saving the recording
      console.log('Moving to next step after viewing transcript');
    }
  }
}