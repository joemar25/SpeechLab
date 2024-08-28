import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { trigger, transition, style, animate } from '@angular/animations';
import { ManageCourseService, ModalState } from '../../../../../../app-services/manage-course/manage-course.service';

@Component({
  selector: 'app-course-preview',
  standalone: true,
  imports: [CommonModule, RouterModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course-preview.component.html',
  styleUrl: './course-preview.component.css',
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
export class CoursePreviewComponent {
  lessonId: { [key: string]: boolean } = {};


  constructor(
    private manageCourse: ManageCourseService
  ){}

  openLesson(item: any){
    this.lessonId[item] = !this.lessonId[item];
  }
  closeLesson(){
    this.lessonId = {};
  }

  requiredSurvey: boolean = false;
  toggleRequiredSurvey(){
    this.requiredSurvey = !this.requiredSurvey;
  }

  arrayList = [
    { 
      id: 1, 
      title: 'Introduction to Cyber Security', 
      instructor: 'Michael Maxwell', 
      profile: 'assets/images/manage-courses/quanby.png' },
  ]

  lesson=[
    { 
      id: 1,
      lesson: 'Lesson',
      title:'Introduction to Cyber Security',
      due:'August 22, 2022 11:59 PM'
    },
    {
      id: 2,
      lesson: 'Lesson',
      title:'Introduction to Cyber Security',
      due:'August 22, 2022 11:59 PM'
    },
    {
      id: 3,
      lesson: 'Lesson',
      title:'Introduction to Cyber Security',
      due:'August 22, 2022 11:59 PM'
    },
    {
      id: 4,
      lesson: 'Lesson',
      title:'Introduction to Cyber Security',
      due:'August 22, 2022 11:59 PM'
    },
    {
      id: 5,
      lesson: 'Lesson',
      title:'Introduction to Cyber Security',
      due:'August 22, 2022 11:59 PM'
    },


    {
      id: 6,
      lesson: 'Lesson',
      title:'Introduction to Cyber Security',
      due:'August 22, 2022 11:59 PM'
    },

  ]

  openCertificateModal(){
    this.manageCourse.toggleSettings(ModalState.Certificate);
  }
  openSurveyModal(){
    this.manageCourse.toggleSettings(ModalState.Survey);
  }

  certificateList = [
    // try alisin yung src file para makita if magbago yung sa certificate
    { id: 1, title: 'Certificate 1', src: 'assets/images/manage-courses/certificate.png' },
  ]

}
