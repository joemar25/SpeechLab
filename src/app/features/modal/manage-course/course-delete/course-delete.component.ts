import { Component, EventEmitter, Output } from '@angular/core';
import { ManageCourseService, ModalState } from '../../../../../app-services/manage-course/manage-course.service';

@Component({
  selector: 'app-course-delete',
  standalone: true,
  imports: [],
  templateUrl: './course-delete.component.html',
  styleUrl: './course-delete.component.css'
})
export class CourseDeleteComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  confirmSaveDraft() {
    this.close();
  }
}
