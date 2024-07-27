import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, SideBarComponent, ],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.css'
})
export class StudentLayoutComponent {

}
