import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationFormModalComponent } from './evaluation-form-modal.component';

describe('EvaluationFormModalComponent', () => {
  let component: EvaluationFormModalComponent;
  let fixture: ComponentFixture<EvaluationFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationFormModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
