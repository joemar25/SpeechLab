import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
interface Language {
  name: string;
  imageUrl: string;
}
@Component({
  selector: 'app-self-assesment',
  standalone: true,
  imports: [UpperCasePipe, RouterModule],
  templateUrl: './self-assesment.component.html',
  styleUrl: './self-assesment.component.css'
})
export class SelfAssesmentComponent {
  languages: Language[] = [
    {
      name: 'English',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8197e7c4aab896c2ed23319eb9c264254c022078cbe2bbc22330880ca916ebbe?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea'
    },
    {
      name: 'Japanese',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9b6424cf4b143f49c3aa7e43f62c7c86c3c4399ccbf33558b496ae9b73f1139e?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea'
    },
    {
      name: 'French',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bbfaa5cca6cc43b3ac7c2e10a82a3cc17fe154268659d8870b81c84bd4520ac6?apiKey=2e31fa6b2d0c458aaebf11d5898097ea&&apiKey=2e31fa6b2d0c458aaebf11d5898097ea'
    }
  ];
}