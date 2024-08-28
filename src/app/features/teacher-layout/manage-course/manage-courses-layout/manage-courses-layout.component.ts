import { trigger, transition, style, animate } from '@angular/animations';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ModalState, ManageCourseService } from '../../../../../app-services/manage-course/manage-course.service';
import { CourseCreateComponent } from '../../../modal/manage-course/course-create/course-create.component';
import { CourseDeleteComponent } from '../../../modal/manage-course/course-delete/course-delete.component';
import { CoursePublishCourseComponent } from '../../../modal/manage-course/course-publish-course/course-publish-course.component';
import { CourseSaveAsDraftComponent } from '../../../modal/manage-course/course-save-as-draft/course-save-as-draft.component';
import { CourseCertificateComponent } from "../../../modal/manage-course/course-certificate/course-certificate.component";


@Component({
  selector: 'app-manage-courses-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CourseCreateComponent,
    CourseSaveAsDraftComponent,
    CoursePublishCourseComponent,
    CourseDeleteComponent,
    CourseCertificateComponent
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './manage-courses-layout.component.html',
  styleUrl: './manage-courses-layout.component.css',
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
export class ManageCoursesLayoutComponent implements OnInit, OnDestroy{
  public ModalState = ModalState; 
  currentModal: ModalState = ModalState.None;
  private subscription!: Subscription;


  constructor(private manageCourseService: ManageCourseService) {}

  ngOnInit(): void {
    this.subscription = this.manageCourseService.settings$.subscribe(state => {
      this.currentModal = state;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  
  openCreateModal() {
    this.manageCourseService.toggleSettings(ModalState.CreateCourse);
  }

  closeCreateModal() {
    this.manageCourseService.toggleSettings(ModalState.None); // Update the state in the service
  }

  close() {
    this.manageCourseService.toggleSettings(ModalState.None);
  }

}
