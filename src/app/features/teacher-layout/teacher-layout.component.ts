import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { SideBarComponent } from "../../shared/components/side-bar/side-bar.component";

@Component({
  selector: 'app-teacher-layout',
  standalone: true,
  imports: [RouterModule,HeaderComponent,SideBarComponent],
  templateUrl: './teacher-layout.component.html',
  styleUrl: './teacher-layout.component.css'
})
export class TeacherLayoutComponent {

}
