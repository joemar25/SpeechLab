import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ModalState {
  None,
  CreateClass,
  CreateSpecificClass,
  CreateTask,
  CreateQuiz,

  
  // Add more modal states as needed
}
@Injectable({
  providedIn: 'root'
})
export class ManageClassService {
  private manageClassSubject = new BehaviorSubject<ModalState>(ModalState.None);
  settings$ = this.manageClassSubject.asObservable();

  toggleSettings(state: ModalState) {
    this.manageClassSubject.next(state);
  }

}