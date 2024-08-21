import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [RouterModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {

  constructor(
    private router: Router
  ) {}

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
      category: 'Intermediate',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
    },
    {
      id: 3,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Beginner',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
    },
    {
      id: 4,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Advanced',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
    },
    {
      id: 5,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Advanced',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
    },
  ]

  dropDown: { [key: string]: boolean } = {}

  toggleDropdown(id: string) {
    this.dropDown[id] = !this.dropDown[id]
  }
  
  closeDropdown(id: string) {
    this.dropDown[id] = false
  }
}
