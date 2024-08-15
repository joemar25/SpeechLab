import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddClassService {
  private manageClassSubject = new BehaviorSubject<boolean>(false);
  addClass$ = this.manageClassSubject.asObservable();

  toggleSettings(state: boolean) {
    this.manageClassSubject.next(state);
  }
}