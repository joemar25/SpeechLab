import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordSpeechComponent } from '../../speech-analyzer/record-speech/record-speech.component';
@Component({
  selector: 'app-speech-lab',
  standalone: true,
  imports: [CommonModule, RecordSpeechComponent],
  templateUrl: './speech-lab.component.html',
  styleUrl: './speech-lab.component.css'
})
export class SpeechLabComponent {
  currentModuleContent = 'This is the current module content displayed by the teacher.';
  showSpeechAnalyzer = false;
  isHandRaised = false;
  isSpeaking = false;

  toggleHandRaise() {
    this.isHandRaised = !this.isHandRaised;
    if (this.isHandRaised) {
      console.log('Hand raised');
      // Here you would typically notify the teacher that the student has raised their hand
    } else {
      console.log('Hand lowered');
      // Here you would typically notify the teacher that the student has lowered their hand
    }
  }

  toggleSpeechAnalyzer() {
    this.showSpeechAnalyzer = !this.showSpeechAnalyzer;
  }

  // This method would be called when the teacher selects this student to speak
  startSpeaking() {
    this.isSpeaking = true;
    this.isHandRaised = false;
  }

  // This method would be called when the teacher ends this student's turn
  stopSpeaking() {
    this.isSpeaking = false;
  }
}