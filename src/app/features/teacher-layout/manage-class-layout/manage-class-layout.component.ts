import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-class-layout',
  standalone: true,
  imports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './manage-class-layout.component.html',
  styleUrl: './manage-class-layout.component.css'
})
export class ManageClassLayoutComponent {

}
