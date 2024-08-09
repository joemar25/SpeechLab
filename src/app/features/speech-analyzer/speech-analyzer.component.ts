import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { SideBarComponent } from "../../shared/components/side-bar/side-bar.component";

@Component({
  selector: 'app-speech-analyzer',
  standalone: true,
  imports: [RouterModule,HeaderComponent,SideBarComponent],
  templateUrl: './speech-analyzer.component.html',
  styleUrl: './speech-analyzer.component.css'
})
export class SpeechAnalyzerComponent {

}
