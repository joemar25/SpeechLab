import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ManageCourseService, ModalState } from '../../../../../../app-services/manage-course/manage-course.service';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [RouterModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AllCoursesComponent {


  constructor(
    private router: Router,
    private manageCourseService: ManageCourseService
  ) {}

  editCreateModal(item: any) {
    this.manageCourseService.toggleSettings(ModalState.CreateCourse);
  }
  
  deleteCourse(id: string) {
    this.manageCourseService.toggleSettings(ModalState.DeleteCourseConfirmation);
  }

  arrayList: any[] = [
    {
      id: 1,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Beginner',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
      lesson: 10
    },
    {
      id: 2,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Intermediate',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
      lesson: 10
    },
    {
      id: 3,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Beginner',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
      lesson: 10
    },
    {
      id: 4,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Advanced',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
      lesson: 1
    },
    {
      id: 5,
      name: 'Michael Maxwell',
      title: 'Introduction to Cyber Security',
      category: 'Advanced',
      language: 'English',
      bgImage: '/assets/images/manage-courses/spider.png',
      profileUrl: '/assets/images/manage-courses/logo.png',
      lesson: 10
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
