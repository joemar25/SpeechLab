import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLedComponent } from './teacher-led.component';

describe('TeacherLedComponent', () => {
  let component: TeacherLedComponent;
  let fixture: ComponentFixture<TeacherLedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherLedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherLedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
