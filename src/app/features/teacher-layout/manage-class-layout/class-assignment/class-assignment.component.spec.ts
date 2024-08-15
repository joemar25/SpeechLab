import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAssignmentComponent } from './class-assignment.component';

describe('ClassAssignmentComponent', () => {
  let component: ClassAssignmentComponent;
  let fixture: ComponentFixture<ClassAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
