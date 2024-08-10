import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';


@Component({
  selector: 'app-manage-settings',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './manage-settings.component.html',
  styleUrl: './manage-settings.component.css'
})
export class ManageSettingsComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
