import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-publish-course',
  standalone: true,
  imports: [],
  templateUrl: './course-publish-course.component.html',
  styleUrl: './course-publish-course.component.css'
})
export class CoursePublishCourseComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  confirmSaveDraft() {
    this.close();
  }
}
