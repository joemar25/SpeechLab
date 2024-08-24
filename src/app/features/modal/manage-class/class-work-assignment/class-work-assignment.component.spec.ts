import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassWorkAssignmentComponent } from './class-work-assignment.component';

describe('ClassWorkAssignmentComponent', () => {
  let component: ClassWorkAssignmentComponent;
  let fixture: ComponentFixture<ClassWorkAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassWorkAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassWorkAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
