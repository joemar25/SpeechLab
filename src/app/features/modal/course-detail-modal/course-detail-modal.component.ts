import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-course-detail-modal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './course-detail-modal.component.html',
  styleUrl: './course-detail-modal.component.css'
})
export class CourseDetailModalComponent {
  @Input() course: any;
  @Output() close = new EventEmitter<void>();
}
