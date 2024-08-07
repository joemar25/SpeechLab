import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLayoutComponent } from './teacher-layout.component';

describe('TeacherLayoutComponent', () => {
  let component: TeacherLayoutComponent;
  let fixture: ComponentFixture<TeacherLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
