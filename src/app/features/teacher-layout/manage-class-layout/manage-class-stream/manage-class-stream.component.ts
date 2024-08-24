import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-class-stream',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './manage-class-stream.component.html',
  styleUrl: './manage-class-stream.component.css',
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
export class ManageClassStreamComponent {

  activeRoutes = [
    {
      link: '/teacher/manage-class/manage-class-stream/manage-class-classwork',
      name: 'Classwork'
    },
    {
      link: '/teacher/manage-class/manage-class-stream/manage-class-students',
      name: 'Students'
    },
    {
      link: '/teacher/manage-class/manage-class-stream/manage-class-grades',
      name: 'Grades'
    },
  ]
}
