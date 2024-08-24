import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-class',
  standalone: true,
  imports: [CommonModule, ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './create-class.component.html',
  styleUrl: './create-class.component.css'
})
export class CreateClassComponent implements OnInit {
  timeScheduleForm: FormGroup;
  hours: number[] = [];
  minutes: number[] = [];

  constructor(private fb: FormBuilder) {
    this.timeScheduleForm = this.fb.group({
      startHour: [12],
      startMinute: [0],
      startPeriod: ['AM'],
      endHour: [12],
      endMinute: [0],
      endPeriod: ['PM']
    });
  }

  ngOnInit() {
    // Populate hours (1-12)
    this.hours = Array.from({ length: 12 }, (_, i) => i + 1);

    // Populate minutes (0-59)
    this.minutes = Array.from({ length: 60 }, (_, i) => i);
  }
  @Output() clickClose = new EventEmitter();

  closeModal() {
    this.timeScheduleForm.reset();
    this.clickClose.emit();
  }
}
