import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-beginner',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './beginner.component.html',
  styleUrl: './beginner.component.css'
})
export class BeginnerComponent {
  arrayList: any[] = [
    {
      id: 1,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Beginner',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
    },
    {
      id: 2,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Beginner',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
    },
  ]
}
