import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollModalComponent } from './poll-modal.component';

describe('PollModalComponent', () => {
  let component: PollModalComponent;
  let fixture: ComponentFixture<PollModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PollModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
