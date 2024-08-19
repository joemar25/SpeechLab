import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-advanced',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.css'
})
export class AdvancedComponent {
  arrayList: any[] = [
    {
      id: 1,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Advanced',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
    },
    {
      id: 2,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Advanced',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
    },
  ]
}
