import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SideBarComponent
  
 } from '../../../shared/components/side-bar/side-bar.component';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterModule, HeaderComponent, SideBarComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

}
