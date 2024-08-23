import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

interface Student {
  name: string;
  avatar: string;
}

interface AttendanceRecord {
  date: string;
  students: { [key: string]: 'Present' | 'Absent' };
}
@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements OnInit{
  students: Student[] = [
    { name: "Bossing", avatar: "assets/images/manage-class/profileicon.png" },
    { name: "Boss", avatar: "assets/images/manage-class/profileicon.png" },
    // Add more students as needed
  ];

  attendanceRecords: AttendanceRecord[] = [
    {
      date: "August 3, 2024",
      students: {
        "Bossing": "Present",
        "Boss": "Present",
      }
    },
    {
      date: "August 4, 2024",
      students: {
        "Bossing": "Absent",
        "Boss": "Present",
      }
    },
    // Add more attendance records as needed
  ];

  selectedDate: string = '';
  showDropdown: boolean = false;

  ngOnInit() {
    this.selectedDate = this.attendanceRecords[0].date;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectDate(date: string) {
    this.selectedDate = date;
    this.showDropdown = false;
  }

  getAttendanceStatus(studentName: string): 'Present' | 'Absent' | '' {
    const record = this.attendanceRecords.find(r => r.date === this.selectedDate);
    return record ? record.students[studentName] || '' : '';
  }
}
