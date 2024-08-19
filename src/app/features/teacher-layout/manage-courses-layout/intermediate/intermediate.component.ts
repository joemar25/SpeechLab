import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-intermediate',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './intermediate.component.html',
  styleUrl: './intermediate.component.css'
})
export class IntermediateComponent {
  arrayList: any[] = [
    {
      id: 1,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Intermediate',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
    },

  ]
}
