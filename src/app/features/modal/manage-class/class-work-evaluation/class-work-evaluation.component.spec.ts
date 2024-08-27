import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassWorkEvaluationComponent } from './class-work-evaluation.component';

describe('ClassWorkEvaluationComponent', () => {
  let component: ClassWorkEvaluationComponent;
  let fixture: ComponentFixture<ClassWorkEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassWorkEvaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassWorkEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
