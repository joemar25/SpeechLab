import { trigger, transition, style, animate } from '@angular/animations';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-class-stream',
  standalone: true,
  imports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

  constructor(
    private router: Router
  ) { }
  goBack() {
    this.router.navigate(['/teacher/manage-class']);
  }
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
