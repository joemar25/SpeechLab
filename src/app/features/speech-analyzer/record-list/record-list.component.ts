import { Component } from '@angular/core';
import { SpeechAnalyzerComponent } from '../speech-analyzer.component';

@Component({
  selector: 'app-record-list',
  standalone: true,
  imports: [SpeechAnalyzerComponent],
  templateUrl: './record-list.component.html',
  styleUrl: './record-list.component.css'
})
export class RecordListComponent {

}
