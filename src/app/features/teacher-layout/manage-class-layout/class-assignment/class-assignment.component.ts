import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';



@Component({
  selector: 'app-class-assignment',
  standalone: true,
  imports: [RouterModule, CommonModule, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './class-assignment.component.html',
  styleUrl: './class-assignment.component.css'
})
export class ClassAssignmentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) {}
  
  routeId: string | null = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routeId = params.get('id');
    });
  }

  back() {
    window.history.back();
  }
}
