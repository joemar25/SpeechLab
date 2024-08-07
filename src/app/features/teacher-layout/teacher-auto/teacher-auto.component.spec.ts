import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAutoComponent } from './teacher-auto.component';

describe('TeacherAutoComponent', () => {
  let component: TeacherAutoComponent;
  let fixture: ComponentFixture<TeacherAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherAutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
