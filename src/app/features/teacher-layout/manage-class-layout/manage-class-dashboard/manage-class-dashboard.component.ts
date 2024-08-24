import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CreateClassComponent } from "../../../modal/manage-class/create-class/create-class.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-class-dashboard',
  standalone: true,
  imports: [CommonModule, CreateClassComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './manage-class-dashboard.component.html',
  styleUrl: './manage-class-dashboard.component.css',
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
export class ManageClassDashboardComponent {
  createClass: boolean = false;

  showModal() {
    this.createClass = true;
  }

  closeModal() {
    this.createClass = false;
  }
}
