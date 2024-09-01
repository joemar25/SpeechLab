import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { SideBarComponent } from "../../shared/components/side-bar/side-bar.component";

@Component({
  selector: 'app-meet-layout',
  standalone: true,
  imports: [RouterModule,HeaderComponent, SideBarComponent],
  templateUrl: './meet-layout.component.html',
  styleUrl: './meet-layout.component.css'
})
export class MeetLayoutComponent {

}
