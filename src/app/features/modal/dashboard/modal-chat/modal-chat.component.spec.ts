import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChatComponent } from './modal-chat.component';

describe('ModalChatComponent', () => {
  let component: ModalChatComponent;
  let fixture: ComponentFixture<ModalChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
