import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../../../../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-poll-modal',
  standalone: true,
  imports: [FormsModule, CommonModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './poll-modal.component.html',
  styleUrls: ['./poll-modal.component.css']
})
export class PollModalComponent {
  @Input() id: string | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();

  pollQuestion: string = '';
  pollOptions: string[] = ['', ''];

  closeModal() {
    this.closeModalEvent.emit();
  }

  addOption() {
    this.pollOptions.push('');
  }

  removeOption(index: number) {
    this.pollOptions.splice(index, 1);
  }

  onSubmit() {
    // Handle form submission here
    console.log('Poll Question:', this.pollQuestion);
    console.log('Poll Options:', this.pollOptions);
    // You can send this data to a service or parent component
  }
}
