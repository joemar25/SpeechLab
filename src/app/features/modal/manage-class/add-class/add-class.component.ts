import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-add-class',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './add-class.component.html',
  styleUrl: './add-class.component.css'
})
export class AddClassComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
