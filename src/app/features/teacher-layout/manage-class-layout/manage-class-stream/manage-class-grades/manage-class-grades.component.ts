import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-class-grades',
  standalone: true,
  imports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './manage-class-grades.component.html',
  styleUrl: './manage-class-grades.component.css'
})
export class ManageClassGradesComponent {
  goBack() {
    history.back();
  }
  routeList = [
    { name: 'Quiz', link: '/teacher/manage-class/manage-class-stream/manage-class-grades/quiz', active: 'active-router' },
    { name: 'Tasks', link: '/teacher/manage-class/manage-class-stream/manage-class-grades/tasks', active: 'active-router'  },
    { name: 'Attendance', link: '/teacher/manage-class/manage-class-stream/manage-class-grades/attendance', active: 'active-router'  }
  ]
}
