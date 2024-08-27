import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { trigger, transition, style, animate } from '@angular/animations';
import { ClassWorkAssignmentComponent } from '../../../../modal/manage-class/class-work-assignment/class-work-assignment.component';
import { ClassWorkEvaluationComponent } from '../../../../modal/manage-class/class-work-evaluation/class-work-evaluation.component';
import { ClassWorkQuizComponent } from '../../../../modal/manage-class/class-work-quiz/class-work-quiz.component';
import { CommonModule } from '@angular/common';
import { ClassworkViewTaskComponent } from '../../../../modal/manage-class/classwork-view-task/classwork-view-task.component';
import { ClassworkViewQuizComponent } from '../../../../modal/manage-class/classwork-view-quiz/classwork-view-quiz.component';

@Component({
  selector: 'app-manage-class-classwork',
  standalone: true,
  imports: [
    ClickOutsideDirective,
    ClassWorkAssignmentComponent,
    ClassWorkEvaluationComponent,
    ClassWorkQuizComponent,
    ClassworkViewTaskComponent,
    ClassworkViewQuizComponent,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './manage-class-classwork.component.html',
  styleUrl: './manage-class-classwork.component.css',
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
export class ManageClassClassworkComponent {
  // isActive: boolean = false;
  dropDown: any | null = null;
  
  showDropDown(id: any, event: Event) {
    event.preventDefault();
    this.dropDown = id;
    // this.isActive = !this.isActive
  }
  closeDropDown() {
    this.dropDown = null
    // this.isActive = false
  }

  //Create task
  selectedAssignmentId: number | null = null;
  openModal(id: number, event: Event) {
    event.preventDefault();
    this.selectedAssignmentId = id;
  }
  closeModal() {
    this.selectedAssignmentId = null;
  }

  //Task modal
  quiz: string = 'quiz';
  task: string = 'task';
  selectedTaskId: number | null = null;
  openTaskModal(work: any, item: number, event: Event) {
    event.preventDefault();
    this.selectedTaskId = work.id;

    if (work.status === 'task' && item === 1) {
      this.selectedTaskId = 1;
    }else if (work.status === 'task' && item === 2) {
      this.selectedTaskId = 3;
    }//
     else if (work.status === 'quiz' && item === 1) {
      this.selectedTaskId = 2;
    }else if (work.status === 'quiz' && item === 2) {
      this.selectedTaskId = 4;
    }
  }

  closeTaskModal() {
    this.selectedTaskId = null;
  }
  
  classWork = [
    { id: '1asd', name: 'Task', due: 'August 22, 2022 11:59 PM', status: 'task'},
    { id: '2asd', name: 'Quiz', due: 'August 22, 2022 11:59 PM', status: 'quiz' },
  ]

  dropDownList = [
    { id: 1, name: 'Assignment'},
    { id: 2, name: 'Quiz' },
    { id: 3, name: 'Evaluation'},
  ]

  actionList = [
    { id: 1, name: 'Edit'},
    { id: 2, name: 'View'},
    { id: 3, name: 'Delete'},
  ]
}
