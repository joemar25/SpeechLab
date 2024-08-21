import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stream',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.css'
})
export class StreamComponent {
  arrayOfLinks = [
    { label: 'Stream', path: '/teacher/manage-class/stream' },
    { label: 'Classwork', path: '/teacher/manage-class/manage/classwork' },
    { label: 'People', path: '/teacher/manage-class/manage/people' },
    { label: 'Grades', path: '/teacher/manage-class/manage/grades' },
    { label: 'Attendance', path: '/teacher/manage-class/manage/attendance' },
  ];
}
