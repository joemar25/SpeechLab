import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-course-detail-modal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course-detail-modal.component.html',
  styleUrl: './course-detail-modal.component.css'
})
export class CourseDetailModalComponent {
  @Input() course: any;
  @Output() close = new EventEmitter<void>();


  closeModal() {
    this.close.emit();
  }

}
