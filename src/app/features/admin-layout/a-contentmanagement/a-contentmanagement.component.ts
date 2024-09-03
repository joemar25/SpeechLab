import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-a-contentmanagement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './a-contentmanagement.component.html',
  styleUrls: ['./a-contentmanagement.component.css']
})
export class AContentmanagementComponent{
  selectedView: string = 'login';

  onViewChange(event: Event) {
    this.selectedView = (event.target as HTMLSelectElement).value;
  }
}
