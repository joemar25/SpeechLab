import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ManageCourseService, ModalState } from '../../../../../../app-services/manage-course/manage-course.service';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';


@Component({
  selector: 'app-advanced',
  standalone: true,
  imports: [RouterModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.css'
})
export class AdvancedComponent {
  
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

  dropDown: { [key: string]: boolean } = {}

  toggleDropdown(id: string) {
    this.dropDown[id] = !this.dropDown[id]
  }
  
  closeDropdown(id: string) {
    this.dropDown[id] = false
  }

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
