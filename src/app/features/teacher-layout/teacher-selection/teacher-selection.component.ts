import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-teacher-selection',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './teacher-selection.component.html',
  styleUrls: ['./teacher-selection.component.css']
})
export class TeacherSelectionComponent {
  selectedOption: 'auto' | 'manual' | null = null;

  constructor(private router: Router) {}

  selectOption(option: 'auto' | 'manual'): void {
    this.selectedOption = option;
  }

  getRouterLink(): string[] {
    return this.selectedOption === 'auto' ? ['/teacher/teacher-auto'] : this.selectedOption === 'manual' ? ['/teacher/teacher-manual'] : [];
  }
}
