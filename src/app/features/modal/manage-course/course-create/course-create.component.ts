import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManageCourseService, ModalState } from '../../../../../app-services/manage-course/manage-course.service';

@Component({
  selector: 'app-course-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course-create.component.html',
  styleUrl: './course-create.component.css'
})
export class CourseCreateComponent {
  @Output() closeModal = new EventEmitter<void>();

  constructor(
    private manageCourseService: ManageCourseService
  ) { }

  close() {
    this.closeModal.emit();
  }

  saveDraft() {
    this.manageCourseService.toggleSettings(ModalState.SaveDraftConfirmation);
  }
  publishCourse() {
    this.manageCourseService.toggleSettings(ModalState.PublishCourseConfirmation);
  }
}
