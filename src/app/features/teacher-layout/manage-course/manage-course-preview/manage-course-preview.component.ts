import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalState, ManageCourseService } from '../../../../../app-services/manage-course/manage-course.service';
import { CourseCertificateComponent } from "../../../modal/manage-course/course-certificate/course-certificate.component";
import { trigger, transition, style, animate } from '@angular/animations';
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';
import { CourseCreateSurveyComponent } from "../../../modal/manage-course/course-create-survey/course-create-survey.component";

@Component({
  selector: 'app-manage-course-preview',
  standalone: true,
  imports: [
    RouterModule,
    CourseCertificateComponent,
    ClickOutsideDirective,
    CourseCreateSurveyComponent
],
  templateUrl: './manage-course-preview.component.html',
  styleUrl: './manage-course-preview.component.css',
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
export class ManageCoursePreviewComponent implements OnInit, OnDestroy {
  public ModalState = ModalState;
  currentModal: ModalState = ModalState.None;
  private subscription!: Subscription;


  constructor(
    private manageCourseService: ManageCourseService
  ) { }

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

  close(){
    this.manageCourseService.toggleSettings(ModalState.None);
  }

  goBack(){
    window.history.back();
  }
}
