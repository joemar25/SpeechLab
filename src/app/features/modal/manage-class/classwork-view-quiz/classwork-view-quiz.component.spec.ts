import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassworkViewQuizComponent } from './classwork-view-quiz.component';

describe('ClassworkViewQuizComponent', () => {
  let component: ClassworkViewQuizComponent;
  let fixture: ComponentFixture<ClassworkViewQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassworkViewQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassworkViewQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
