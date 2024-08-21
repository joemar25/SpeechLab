import { DatePipe } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instruction',
  standalone: true,
  imports: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.css'
})
export class InstructionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ){}
  routeId: string | null = '';
  ngOnInit(): void {
    this.routeId = this.route.snapshot.paramMap.get('id');

    this.updateTime();
  }

  name: string = 'Michael Maxwell'
  today: Date = new Date();
  time: string = '';
  points:number = 100;
  updateTime(): void {
    const today = new Date();
    const options = { hour: "2-digit" as const, minute: "2-digit" as const, hour12: true };
    this.time = today.toLocaleTimeString([], options);
  }

  profile:boolean = false
}
