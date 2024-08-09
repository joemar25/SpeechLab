import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-auto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-auto.component.html',
  styleUrls: ['./teacher-auto.component.css']
})
export class TeacherAutoComponent {
  selectedMode: string = '';
  selectedStudents: number[] = [];
  students = [
    { name: 'John Doe', id: '001' },
  { name: 'Jane Smith', id: '002' },
  { name: 'Mich John', id: '003' },
  { name: 'Emily Davis', id: '004' },
  { name: 'Will Brown', id: '005' },
  { name: 'Oliv Mart', id: '006' },
  { name: 'James Wilson', id: '007' },
  { name: 'Sophia Moore', id: '008' },
  { name: 'Benj Taylor', id: '009' },
  { name: 'Isa Ason', id: '010' },
  { name: 'Lucas Thomas', id: '011' },
  { name: 'Mia Jackson', id: '012' },
  { name: 'Ethan White', id: '013' },
  { name: 'Char Harris', id: '014' },
  { name: 'Alex Martin', id: '015' },
  { name: 'Ame Thomp', id: '016' },
  { name: 'Henry Garcia', id: '017' },
  { name: 'Ava Robin', id: '018' },
  { name: 'Jack Clark', id: '019' },
  { name: 'Harper Lewis', id: '020' },
  { name: 'Liam Walker', id: '021' },
  { name: 'Ella Young', id: '022' },
  { name: 'Noah King', id: '023' },
  { name: 'Grace Scott', id: '024' },
  { name: 'Liam Walker', id: '025' },
  { name: 'Ella Young', id: '026' },
  { name: 'Noah King', id: '027' },
  { name: 'Grace Scott', id: '028' },
  { name: 'John Doe', id: '029' },
  { name: 'Jane Smith', id: '030' },
  { name: 'Mich John', id: '031' },
  { name: 'Emily Davis', id: '032' },
  { name: 'Will Brown', id: '033' },
  { name: 'Oliv Mart', id: '034' },
  { name: 'James Wilson', id: '035' },
  { name: 'Sophia Moore', id: '036' },
  { name: 'Benj Taylor', id: '037' },
  { name: 'Isa Ason', id: '038' },
  { name: 'Lucas Thomas', id: '039' },
  { name: 'Mia Jackson', id: '040' },
  { name: 'Ethan White', id: '041' },
  { name: 'Char Harris', id: '042' }
  ];

  get leftColumnStudents() {
    return this.students.slice(0, 24).map((student, index) => ({ ...student, index }));
  }

  get rightColumnStudents() {
    return this.students.slice(24).map((student, index) => ({ ...student, index: index + 24 }));
  }
  selectMode(mode: string) {
    if (this.selectedMode === mode) {
      // Toggle off the mode
      this.selectedMode = '';
      this.selectedStudents = [];
    } else {
      // Set the new mode
      this.selectedMode = mode;
      // Clear selected students if not in "1v1" mode
      if (mode !== '1v1') {
        this.selectedStudents = [];
      }
    }
  }
  selectStudent(index: number) {
    if (!this.selectedMode) {
      // Do not allow selection if no mode is selected
      return;
    }

    const isSelected = this.selectedStudents.includes(index);

    if (this.selectedMode === '1v1') {
      // Allow only one student to be selected
      this.selectedStudents = isSelected ? [] : [index];
    } else if (this.selectedMode === 'Group') {
      // Limit the number of selected students to 5
      if (isSelected) {
        this.selectedStudents = this.selectedStudents.filter(i => i !== index);
      } else if (this.selectedStudents.length < 5) {
        this.selectedStudents.push(index);
      }
    } else if (this.selectedMode === 'Custom') {
      // Allow unlimited selection
      this.selectedStudents = isSelected 
        ? this.selectedStudents.filter(i => i !== index)
        : [...this.selectedStudents, index];
    }
  }
}
