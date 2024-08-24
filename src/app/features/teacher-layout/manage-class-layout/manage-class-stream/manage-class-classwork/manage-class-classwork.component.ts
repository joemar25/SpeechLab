import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { trigger, transition, style, animate } from '@angular/animations';
import { ClassWorkAssignmentComponent } from '../../../../modal/manage-class/class-work-assignment/class-work-assignment.component';
import { ClassWorkEvaluationComponent } from '../../../../modal/manage-class/class-work-evaluation/class-work-evaluation.component';
import { ClassWorkQuizComponent } from '../../../../modal/manage-class/class-work-quiz/class-work-quiz.component';

@Component({
  selector: 'app-manage-class-classwork',
  standalone: true,
  imports: [
    ClickOutsideDirective,
    ClassWorkAssignmentComponent,
    ClassWorkEvaluationComponent,
    ClassWorkQuizComponent
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
  dropDown: boolean = false;
  showModal: { [key: number]: boolean } = {};
  showDropDown() {
    this.dropDown = !this.dropDown
  }
  closeDropDown() {
    this.dropDown = false
  }

  openModal(id: number) {
    this.showModal[id] = true;
  }
  closeModal(id: number) {
    this.showModal[id] = false;
  }



  dropDownList = [
    {
      id: 1,
      name: 'Assignment',
    },
    {
      id: 2,
      name: 'Quiz',
    },
    {
      id: 3,
      name: 'Evaluation',
    },
  ]
}
