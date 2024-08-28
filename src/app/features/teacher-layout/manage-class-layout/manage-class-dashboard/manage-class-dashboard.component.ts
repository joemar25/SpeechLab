import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { CreateClassComponent } from "../../../modal/manage-class/create-class/create-class.component";
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';
import { DeleteClassComponent } from '../../../modal/manage-class/delete-class/delete-class.component';
import { ManageClassService, ModalState } from '../../../../../app-services/manage-class/manage-class.service';
import { Subscription } from 'rxjs';

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
export class ManageClassDashboardComponent implements OnInit, OnDestroy {
  public ModalState = ModalState;
  currentModal: ModalState = ModalState.None;
  private subscription!: Subscription;

  constructor(
    private manageClassService: ManageClassService
  ) { }

  ngOnInit(): void {
    this.subscription = this.manageClassService.settings$.subscribe(state => {
      this.currentModal = state;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  actionList = [
    { id: 1, name: 'Edit' },
    { id: 2, name: 'Delete' },
  ]

  // Action modal
  selectedId: any | null = null;
  openModal(item: { id: any; name: string }) {
    this.manageClassService.toggleSettings(item.id);
    this.selectedId = item.id;
  }

  closeSelectedModal() {
    this.manageClassService.toggleSettings(ModalState.None);
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
  showModal() {
    this.manageClassService.toggleSettings(ModalState.CreateClass);
  }

  closeModal() {
    this.manageClassService.toggleSettings(ModalState.None);
  }


}
