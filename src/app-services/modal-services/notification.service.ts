import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<boolean>(false);
  notification$ = this.notificationSubject.asObservable();
  toggleNotification(state: boolean) {
    this.notificationSubject.next(state);
  }

  
  private successSubject = new BehaviorSubject<boolean>(false);
  success$ = this.successSubject.asObservable();

  private noChangesSubject = new BehaviorSubject<boolean>(false);
  noChanges$ = this.noChangesSubject.asObservable();

  toggleSuccess() {
    this.successSubject.next(true);
    setTimeout(() => {
      this.successSubject.next(false);
    }, 2000);
  }

  toggleNoChanges() {
    this.noChangesSubject.next(true);
    setTimeout(() => {
      this.noChangesSubject.next(false);
    }, 2000);
  }
}