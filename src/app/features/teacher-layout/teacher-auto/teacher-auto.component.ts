import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-auto',
  standalone: true,
  imports: [],
  templateUrl: './teacher-auto.component.html',
  styleUrl: './teacher-auto.component.css'
})
export class TeacherAutoComponent {
 // Current mode of selection
 selectedMode: '1v1' | 'Group' | 'Custom' = '1v1';

 // List of students (you can modify this as needed)
 students = Array(12).fill(null); // Example with 12 students
 selectedStudents: number[] = []; // Indexes of selected students

 // Mode selection handler
 selectMode(mode: '1v1' | 'Group' | 'Custom') {
   this.selectedMode = mode;
   this.selectedStudents = []; // Clear previous selections on mode change
 }

 // Student selection handler
 selectStudent(index: number) {
   if (this.selectedMode === '1v1') {
     this.selectedStudents = [index];
   } else if (this.selectedMode === 'Group') {
     if (this.selectedStudents.includes(index)) {
       this.selectedStudents = this.selectedStudents.filter(i => i !== index);
     } else if (this.selectedStudents.length < 5) {
       this.selectedStudents.push(index);
     }
   } else if (this.selectedMode === 'Custom') {
     if (this.selectedStudents.includes(index)) {
       this.selectedStudents = this.selectedStudents.filter(i => i !== index);
     } else {
       this.selectedStudents.push(index);
     }
   }
 }
}
