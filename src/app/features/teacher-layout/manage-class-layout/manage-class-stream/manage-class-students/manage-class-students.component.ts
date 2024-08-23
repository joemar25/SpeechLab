import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-manage-class-students',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './manage-class-students.component.html',
  styleUrl: './manage-class-students.component.css'
})
export class ManageClassStudentsComponent {

}
