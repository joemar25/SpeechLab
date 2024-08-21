import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-courses-layout',
  standalone: true,
  imports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './manage-courses-layout.component.html',
  styleUrl: './manage-courses-layout.component.css',
})
export class ManageCoursesLayoutComponent {

}
