import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-chat',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './modal-chat.component.html',
  styleUrl: './modal-chat.component.css'
})
export class ModalChatComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
