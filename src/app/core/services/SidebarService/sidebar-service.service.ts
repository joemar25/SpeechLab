import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarServiceService {
  private isCollapsedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isCollapsed$: Observable<boolean> = this.isCollapsedSubject.asObservable();

  constructor() { }

  toggleSidebar(): void {
    this.isCollapsedSubject.next(!this.isCollapsedSubject.value);
  }

  getIsCollapsed(): boolean {
    return this.isCollapsedSubject.value;
  }

  setCollapsed(isCollapsed: boolean): void {
    this.isCollapsedSubject.next(isCollapsed);
  }
}