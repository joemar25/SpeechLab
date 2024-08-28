import { Component } from '@angular/core';
import { SpeechAnalyzerComponent } from '../speech-analyzer.component';

@Component({
  selector: 'app-record-report',
  standalone: true,
  imports: [SpeechAnalyzerComponent],
  templateUrl: './record-report.component.html',
  styleUrl: './record-report.component.css'
})
export class RecordReportComponent {

}
