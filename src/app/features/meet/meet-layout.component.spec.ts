import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetLayoutComponent } from './meet-layout.component';

describe('MeetLayoutComponent', () => {
  let component: MeetLayoutComponent;
  let fixture: ComponentFixture<MeetLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
