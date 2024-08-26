import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaskViewComponent } from "../../../../../../modal/manage-class/task-view/task-view.component";

@Component({
  selector: 'app-task-result',
  standalone: true,
  imports: [RouterModule, CommonModule, TaskViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './task-result.component.html',
  styleUrl: './task-result.component.css',
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
export class TaskResultComponent implements OnInit{
  quizId: string | null = null;
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
  }
  taskList = [
    {
      id: 1,
      name: 'John Doe',
      grade: '67.72/100',
      date: 'May 22, 2024',
      status: 'Turned in', 
    },
    {
      id: 2,
      name: 'Rico Yan?',
      grade: '67.72/100',
      date: 'May 22, 2024',
      status: 'Not submitted',
    }
  ]

  selectedTaskId: number | null = null;

  // Method to open the modal for a specific task
  openModal(id: number, event: Event) {
    event.preventDefault(); // Prevent any default action if needed
    this.selectedTaskId = id;
  }

  // Method to close the modal
  closeModal() {
    this.selectedTaskId = null;
  }
}
