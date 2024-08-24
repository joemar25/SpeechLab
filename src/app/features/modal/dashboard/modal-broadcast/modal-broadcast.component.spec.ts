import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBroadcastComponent } from './modal-broadcast.component';

describe('ModalBroadcastComponent', () => {
  let component: ModalBroadcastComponent;
  let fixture: ComponentFixture<ModalBroadcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBroadcastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
