import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-detail-modal',
  standalone: true,
  imports: [],
  templateUrl: './course-detail-modal.component.html',
  styleUrl: './course-detail-modal.component.css'
})
export class CourseDetailModalComponent {
  @Input() course: any;
  @Output() close = new EventEmitter<void>();
}
