import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherModeComponent } from './teacher-mode.component';

describe('TeacherModeComponent', () => {
  let component: TeacherModeComponent;
  let fixture: ComponentFixture<TeacherModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
