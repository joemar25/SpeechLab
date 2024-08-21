import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWorkComponent } from './student-work.component';

describe('StudentWorkComponent', () => {
  let component: StudentWorkComponent;
  let fixture: ComponentFixture<StudentWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
