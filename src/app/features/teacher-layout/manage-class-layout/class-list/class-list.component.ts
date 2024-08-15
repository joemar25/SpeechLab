import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddClassService } from '../../../../../app-services/modal-services/manage-class/add-class.service';
import { AddClassComponent } from "../../../modal/manage-class/add-class/add-class.component";
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-class-list',
  standalone: true,
  imports: [CommonModule, RouterModule, AddClassComponent, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './class-list.component.html',
  styleUrl: './class-list.component.css',
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
export class ClassListComponent implements OnInit{

  classList: any = [
    {
      id: '1A',
      className: 'Logical Reasoning',
      course: 'BUCS',
      year: '1',
      schedule: 'M - W - F (9:00 AM - 11:00 AM)',
      src: 'assets/images/manage-class/class-list1.png',
    },
    {
      id: '1B',
      className: 'English',
      course: 'BSIT',
      year: '2',
      schedule: 'M - W - F (10:00 AM - 12:00 PM)',
      src: 'assets/images/manage-class/class-list2.png',
    },
  ];

  dropDown: { [key: string]: boolean } = {};

  private subscription: Subscription | undefined;

  constructor(
    private addClassService:AddClassService
  ) {}

  addCLass: boolean = false;
  ngOnInit(): void {
    this.subscription = this.addClassService.addClass$.subscribe(
      (state) => (this.addCLass = state)
    );
  }

  openAddClassModal() {
    this.addClassService.toggleSettings(true);
  }
  closeModal() {
    this.addClassService.toggleSettings(false);
  }

  openDropdown(number: number) {
    this.dropDown[number] = !this.dropDown[number]
  }

  closeDropdown(number: number){
    this.dropDown[number] = false
  }
}
