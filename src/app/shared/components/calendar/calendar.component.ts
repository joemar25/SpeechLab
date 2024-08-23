import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  dates: {day: number, isCurrentMonth: boolean, date: Date}[] = [];
  currentDate = new Date();
  currentMonth: number = this.currentDate.getMonth();
  currentYear: number = this.currentDate.getFullYear();

  ngOnInit() {
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
    this.generateCalendar();
  }

  generateCalendar() {
    this.dates = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    
    // Add last days of previous month
    const daysFromPrevMonth = (firstDay.getDay() + 6) % 7; // Adjust for Monday start
    for (let i = daysFromPrevMonth; i > 0; i--) {
      const date = new Date(this.currentYear, this.currentMonth, 1 - i);
      this.dates.push({day: date.getDate(), isCurrentMonth: false, date});
    }
    
    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(this.currentYear, this.currentMonth, i);
      this.dates.push({day: i, isCurrentMonth: true, date});
    }
    
    // Add first days of next month
    const remainingDays = 7 - (this.dates.length % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        const date = new Date(this.currentYear, this.currentMonth + 1, i);
        this.dates.push({day: i, isCurrentMonth: false, date});
      }
    }
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  getMonthName(month: number): string {
    return new Date(this.currentYear, month, 1).toLocaleString('default', { month: 'long' });
  }
}