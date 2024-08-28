import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCreateSurveyComponent } from './course-create-survey.component';

describe('CourseCreateSurveyComponent', () => {
  let component: CourseCreateSurveyComponent;
  let fixture: ComponentFixture<CourseCreateSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCreateSurveyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseCreateSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
