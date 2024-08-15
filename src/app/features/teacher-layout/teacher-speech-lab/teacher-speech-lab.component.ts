import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-speech-lab',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './teacher-speech-lab.component.html',
  styleUrl: './teacher-speech-lab.component.css'
})
export class TeacherSpeechLabComponent {

  selectedMode: string = '';
  selectedStudents: number[] = [];
  maxStudents: number = 42;
  showSelectionSection: boolean = false;
selectedStudentName: string = '';

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
  { name: 'Lucas Thomas', id: '039' }
  ];

  constructor() {
    this.fillWithDefaultStudents();
  }

fillWithDefaultStudents() {
  const defaultStudentCount = this.maxStudents - this.students.length;
  for (let i = 0; i < defaultStudentCount; i++) {
    this.students.push({
      name: 'Student Name',
      id: `Absent - ${i + 1}` 
    });
  }
}


  isDefaultStudent(student: any): boolean {
    return student.id.startsWith('Absent - ');
  }  

  get leftColumnStudents() {
    return this.students
      .filter((_, index) => index % 7 < 4) 
      .map((student, index) => ({ ...student, index }));
  }
  
  get rightColumnStudents() {
    return this.students
      .filter((_, index) => index % 7 >= 4)
      .map((student, index) => ({ ...student, index: index + this.students.length / 2 }));
  }
  

  selectMode(mode: string) {
    if (this.selectedMode === mode) {
      this.selectedMode = '';
      this.selectedStudents = [];
    } else {
      this.selectedMode = mode;
      if (mode !== '1v1') {
        this.selectedStudents = [];
      }
    }
  }

  selectStudent(index: number) {
    const student = this.students[index];
    
    if (this.isDefaultStudent(student)) {
        console.log('Default student cannot be selected:', student);
        return;
    }

    if (!this.selectedMode) {
        console.log('Select a mode first before choosing a student.');
        return;
    }

    if (this.selectedMode === '1v1') {
        if (this.selectedStudents.length < 1) {
            this.selectedStudents.push(index);
        } else {
            const studentIndex = this.selectedStudents.indexOf(index);
            if (studentIndex > -1) {
                this.selectedStudents.splice(studentIndex, 1);
            } else {
                this.selectedStudents = [index];
            }
        }
    } else {
        const studentIndex = this.selectedStudents.indexOf(index);
        if (studentIndex > -1) {
            this.selectedStudents.splice(studentIndex, 1);
        } else {
            this.selectedStudents.push(index);
        }
    }
}


  confirmSelection() {
    if (this.selectedStudents.length === 1) {
      const selectedStudent = this.students[this.selectedStudents[0]];
      this.selectedStudentName = selectedStudent.name;
      this.showSelectionSection = true;
    }
    // Keep the existing code
    console.log('Confirmed student selection:', this.selectedStudents);
    this.selectedStudents = [];
    this.selectedMode = '';
  }

  cancelSelection() {
    this.selectedStudents = [];
  }

  isButtonDisabled(mode: string): boolean {
    return this.selectedMode === '1v1' && this.selectedMode !== mode;
  }

  isConfirmCancelVisible(): boolean {
    return this.selectedMode === '1v1' && this.selectedStudents.length === 1;
  }

  closeSelectionSection() {
    this.showSelectionSection = false;
    this.selectedStudentName = '';
  }

}
