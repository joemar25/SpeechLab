import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { ModalService } from '../../../../../../app-services/modal-services/manage-class/modal.service';
import { PollModalComponent } from '../components/poll-modal/poll-modal.component';
import { SurveyModalComponent } from '../components/survey-modal/survey-modal.component';
import { EvaluationFormModalComponent } from '../components/evaluation-form-modal/evaluation-form-modal.component';

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective, RouterModule, PollModalComponent, SurveyModalComponent, EvaluationFormModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './class-detail.component.html',
  styleUrl: './class-detail.component.css',
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
export class ClassDetailComponent implements OnInit{
  profile:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {}
  activeRouteId: string | null = ''

  ngOnInit(): void {
    this.activeRouteId = this.route.snapshot.paramMap.get('id');
  }

  arrayList: any[] = [
    { id: 1, title: 'Announcement to class', comment: 12 },
    { id: 2, title: 'Assigment', comment: 5 },
    { id: 3, title: 'Project #1', comment: 24 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 5, title: 'Module 1.1', comment: 40 },
    { id: 6, title: 'Module 1.1', comment: 40 },
    { id: 7, title: 'Module 1.1', comment: 40 },
    { id: 8, title: 'Module 1.1', comment: 40 },
    { id: 9, title: 'Module 1.1', comment: 40 },
    { id: 10, title: 'Module 1.1', comment: 40 },
    { id: 11, title: 'Module 1.1', comment: 40 },
    { id: 12, title: 'Module 1.1', comment: 40 },
    { id: 13, title: 'Module 1.1', comment: 40 },
    { id: 14, title: 'Module 1.1', comment: 40 },
    { id: 15, title: 'Module 1.1', comment: 40 },
  ];

  commentList: any[] = [
    { id: 1, comment: 'Hello Class', user: 'instructor' },
    { id: 2, comment: 'Hi sir', user: 'student' },
  ]

  self = true;
  comments: { [key: string]: boolean } = {}
  openCommentModal(id: number) {
    this.comments[id] = !this.comments[id];
  }
  closeCommentModal(id: number) {
    this.comments[id] = false;
  }

  dropdown: boolean = false;
  openDropdown(){
    this.dropdown = !this.dropdown;
  }
  closeDropdown(){
    this.dropdown = false;
  }

  poll: boolean = false;
  survey: boolean = false;
  evaluation: boolean = false;


    isModalOpen: { [key: string]: boolean } = {
      poll: false,
      survey: false,
      evaluation: false,
    };
    
    modalId: string | null = null;
  
    toggleModal(category: string, id: string | null) {
      this.isModalOpen[category] = !this.isModalOpen[category];
      if (this.isModalOpen[category]) {
        this.modalId = id || null;
      } else {
        this.modalId = null;
      }
    }
}
