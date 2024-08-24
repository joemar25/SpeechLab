import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassWorkQuizComponent } from './class-work-quiz.component';

describe('ClassWorkQuizComponent', () => {
  let component: ClassWorkQuizComponent;
  let fixture: ComponentFixture<ClassWorkQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassWorkQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassWorkQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
