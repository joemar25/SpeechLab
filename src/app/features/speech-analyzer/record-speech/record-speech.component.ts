import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpeechAnalyzerComponent } from '../speech-analyzer.component';

@Component({
  selector: 'app-record-speech',
  standalone: true,
  imports: [CommonModule, SpeechAnalyzerComponent],
  templateUrl: './record-speech.component.html',
  styleUrl: './record-speech.component.css'
})
export class RecordSpeechComponent {
  isRecording: boolean = false;
  recordingComplete: boolean = false;
  currentPhase: 'register' | 'question' | 'transcript' = 'register';
  recordingDuration: string = '00:00';
  private startTime: Date | null = null;

  constructor(private router: Router) {}

  toggleRecording() {
    if (this.isRecording) {
      // Stop recording
      this.isRecording = false;
      this.recordingComplete = true;
      this.recordingDuration = this.calculateDuration();
      // Here you would typically stop the actual recording process
    } else {
      // Start recording
      this.isRecording = true;
      this.recordingComplete = false;
      this.startTime = new Date();
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
    this.recordingDuration = '00:00';
    this.startTime = null;
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

  private calculateDuration(): string {
    if (!this.startTime) return '00:00';
    const endTime = new Date();
    const durationMs = endTime.getTime() - this.startTime.getTime();
    const seconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}