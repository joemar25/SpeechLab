import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalState = new BehaviorSubject<{isOpen: boolean, type: string, id: string}>({
    isOpen: false,
    type: '',
    id: ''
  });

  modalState$ = this.modalState.asObservable();

  openModal(type: string, id: string) {
    this.modalState.next({ isOpen: true, type, id });
  }

  closeModal() {
    this.modalState.next({ isOpen: false, type: '', id: '' });
  }
}