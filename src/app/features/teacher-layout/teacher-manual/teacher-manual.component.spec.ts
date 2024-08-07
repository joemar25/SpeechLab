import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherManualComponent } from './teacher-manual.component';

describe('TeacherManualComponent', () => {
  let component: TeacherManualComponent;
  let fixture: ComponentFixture<TeacherManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherManualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
