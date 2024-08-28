import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCoursePreviewComponent } from './manage-course-preview.component';

describe('ManageCoursePreviewComponent', () => {
  let component: ManageCoursePreviewComponent;
  let fixture: ComponentFixture<ManageCoursePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCoursePreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageCoursePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
