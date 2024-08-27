import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDashboardComponent } from './quiz-dashboard.component';

describe('QuizDashboardComponent', () => {
  let component: QuizDashboardComponent;
  let fixture: ComponentFixture<QuizDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
