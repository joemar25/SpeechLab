import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { trigger, transition, style, animate } from '@angular/animations';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';


@Component({
  selector: 'app-student-work',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './student-work.component.html',
  styleUrl: './student-work.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 })),
      ]),
    ]),
  ],

})
export class StudentWorkComponent {

  arrayList: any[] = [
    { id: 1, name: 'Michael Maxwell', status: 'Turned in', score: '85' },
    { id: 2, name: 'Sarah Connor', status: 'Late', score: '72' },
    { id: 3, name: 'John Doe', status: 'Missed', score: 'N/A' },
    { id: 4, name: 'Emily Davis', status: 'Turned in', score: '90' },
    { id: 5, name: 'Alice Johnson', status: 'Late', score: '68' }
  ];


  modalId: { [key: string]: boolean } = {}
  openModal(id: string): void {
    this.modalId[id] = !this.modalId[id];
  }

  closeModal(id: string): void {
    this.modalId[id] = false;
  }

}
