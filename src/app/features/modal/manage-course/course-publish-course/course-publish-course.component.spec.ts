import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePublishCourseComponent } from './course-publish-course.component';

describe('CoursePublishCourseComponent', () => {
  let component: CoursePublishCourseComponent;
  let fixture: ComponentFixture<CoursePublishCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursePublishCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursePublishCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
