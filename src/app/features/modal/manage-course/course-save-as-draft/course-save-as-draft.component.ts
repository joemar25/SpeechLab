import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-save-as-draft',
  standalone: true,
  imports: [],
  templateUrl: './course-save-as-draft.component.html',
  styleUrl: './course-save-as-draft.component.css'
})
export class CourseSaveAsDraftComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  confirmSaveDraft() {
    this.close();
  }
}
