import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-class-assignment',
  standalone: true,
  imports: [RouterModule, CommonModule, ClickOutsideDirective],
  templateUrl: './class-assignment.component.html',
  styleUrl: './class-assignment.component.css'
})
export class ClassAssignmentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  routeId: string | null = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routeId = params.get('id');
    });
  }
}
