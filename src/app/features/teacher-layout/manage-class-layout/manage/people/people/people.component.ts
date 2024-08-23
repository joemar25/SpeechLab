import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InviteTeachersComponent } from '../../components/invite-teachers/invite-teachers.component';
import { InviteStudentsComponent } from '../../components/invite-students/invite-students.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [InviteTeachersComponent, InviteStudentsComponent, CommonModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'], // Fixed typo (should be 'styleUrls')
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
export class PeopleComponent {
  isModalOpen: { [key: string]: boolean } = {}; // Initialize as an object

  openModal(userType: string) {
    this.isModalOpen[userType] = !this.isModalOpen[userType];
  }

  toggleModal(userType: string) {
    this.isModalOpen[userType] = !this.isModalOpen[userType];
  }
}
