import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {
  attendanceList = [
    { name: 'Name', date: 'August 22, 2024', status: 'present', time: '9:00 AM - 12:00 PM', professor: 'Mr. Maxwell' },
    { name: 'Name', date: 'August 22, 2024', status: 'absent', time: '10:00 AM - 12:00 PM', professor: 'Mr. Maxwell' },
    { name: 'Name', date: 'August 22, 2024', status: 'present', time: '1:00 PM - 3:00 PM', professor: 'Mr. Maxwell' },
  ]
}
