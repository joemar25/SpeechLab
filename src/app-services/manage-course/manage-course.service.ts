import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ModalState {
  None,
  CreateCourse,
  SaveDraftConfirmation,
  PublishCourseConfirmation,
  DeleteCourseConfirmation,
  Certificate,
  Survey
  
  // Add more modal states as needed
}
@Injectable({
  providedIn: 'root'
})
export class ManageCourseService {
  private manageCourseSubject = new BehaviorSubject<ModalState>(ModalState.None);
  settings$ = this.manageCourseSubject.asObservable();

  toggleSettings(state: ModalState) {
    this.manageCourseSubject.next(state);
  }
}