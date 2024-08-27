import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CreateClassComponent } from "../../../modal/manage-class/create-class/create-class.component";
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';
import { DeleteClassComponent } from '../../../modal/manage-class/delete-class/delete-class.component';

@Component({
  selector: 'app-manage-class-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    CreateClassComponent, 
    DeleteClassComponent, 
    RouterModule, 
    ClickOutsideDirective
  ],
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
  actionList = [
    { id: 1, name: 'Edit'},
    { id: 2, name: 'Delete'},
  ]

  // Action modal
  selectedModal: any | null = null
  openModal(item:any){
    this.selectedModal  = item.id
  } 
  closeSelectedModal(){
    this.selectedModal = null;
  }
  // Dropdown
  dropDown: any | null = null;
  showDropDown(id: any, event: Event) {
    event.preventDefault();
    this.dropDown = id;
  }
  closeDropDown() {
    this.dropDown = null
  }

// Create modal
  createClass: boolean = false;
  showModal() {
    this.createClass = true;
  }

  closeModal() {
    this.createClass = false;
  }


}
