import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-manage-class-students',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './manage-class-students.component.html',
  styleUrl: './manage-class-students.component.css',
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
export class ManageClassStudentsComponent {
  users = [
    { id: 1, name: 'Catherine Smith', email: 'catherinesmith@gmail.com', status: 'Online' },
    { id: 2, name: 'John Doe', email: 'johndoe@gmail.com', status: 'Enrolled' },
    // Add more users...
  ];

  selectedUser: { id: number; name: string; email: string; status: string } | null = null;

  openDeleteModal(user: { id: number; name: string; email: string; status: string }) {
    this.selectedUser = user;
  }
  
  closeDeleteModal() {
    this.selectedUser = null;
  }
  
  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    this.closeDeleteModal();
  }
}
