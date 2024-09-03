import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './a-dashboard.component.html',
  styleUrls: ['./a-dashboard.component.css']
})
export class ADashboardComponent implements OnInit {
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: any[][] = [];
  currentDate = new Date();

  metrics = [
    { title: 'Student Count', icon: '👥', value: '2,945' },
    { title: 'Teachers Employed', icon: '👨‍🏫', value: '137' },
    { title: 'New Class', icon: '📚', value: '642' },
    { title: 'New Enrollees', icon: '🎓', value: '1,274' },
  ];

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    this.calendarDays = [];
    let week: any[] = [];

    for (let i = 0; i < startingDay; i++) {
      week.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      week.push({ date: day, hasEvent: this.hasEvent(day) });
      if (week.length === 7) {
        this.calendarDays.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      this.calendarDays.push(week);
    }
  }

  changeMonth(increment: number) {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + increment, 1);
    this.generateCalendar();
  }

  formatDate(date: Date): string {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

  isToday(day: any): boolean {
    if (!day) return false;
    const today = new Date();
    return day.date === today.getDate() &&
           this.currentDate.getMonth() === today.getMonth() &&
           this.currentDate.getFullYear() === today.getFullYear();
  }

  hasEvent(day: number): boolean {
    // Example: Event on the 15th of every month
    return day === 15;
  }
}