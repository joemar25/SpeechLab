import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './class-detail.component.html',
  styleUrl: './class-detail.component.css'
})
export class ClassDetailComponent {

  arrayList: any[] = [
    { id: 1, title: 'Announcement to class', comment: 12 },
    { id: 2, title: 'Assigment', comment: 5 },
    { id: 3, title: 'Project #1', comment: 24 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 4, title: 'Module 1.1', comment: 40 },
    { id: 4, title: 'Module 1.1', comment: 40 },
  ];
}
