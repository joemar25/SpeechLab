import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageSettingsService {
  private manageSettingSubject = new BehaviorSubject<boolean>(false);
  settings$ = this.manageSettingSubject.asObservable();

  toggleSettings(state: boolean) {
    this.manageSettingSubject.next(state);
  }
}