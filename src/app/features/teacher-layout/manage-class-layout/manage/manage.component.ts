import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  arrayOfLinks = [
    { label: 'Stream', path: '/teacher/manage-class/stream' },
    { label: 'Classwork', path: '/teacher/manage-class/manage/classwork' },
    { label: 'People', path: '/teacher/manage-class/manage/people' },
    { label: 'Grades', path: '/teacher/manage-class/manage/grades' },
    { label: 'Attendance', path: '/teacher/manage-class/manage/attendance' },
  ];
}
