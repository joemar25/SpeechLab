import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-manage-class',
  standalone: true,
  imports: [CommonModule, RouterModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './manage-class.component.html',
  styleUrl: './manage-class.component.css',
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
export class ManageClassComponent {
  classSchedules = [
    {
      id: '1A',
      className: 'Logical Reasoning',
      icon: 'icon-park-solid:notes',
      time: '09:00 AM - 12:00 PM',
      iconColor: 'bg-primary-tw text-secondary-tw',
    },
    {
      id: '1B',
      className: 'Logical Reasoning',
      icon: 'icon-park-solid:notes',
      time: '09:00 AM - 12:00 PM',
      iconColor: 'bg-primary-tw text-secondary-tw',
    },
    {
      id: '1C',
      className: 'Logical Reasoning',
      icon: 'icon-park-solid:notes',
      time: '09:00 AM - 12:00 PM',
      iconColor: 'bg-primary-tw text-secondary-tw',
    },
    // Add more schedules here as needed
  ];

  dropDown: { [key: string]: boolean } = {};
  
  toggleDropdown(uid:string) {
    this.dropDown[uid] = !this.dropDown[uid];
    console.log(this.dropDown[uid], uid);
  }
  closeDropdown(uid:string) {
    this.dropDown[uid] = false
  }
}
