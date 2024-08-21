import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCoursesLayoutComponent } from './manage-courses-layout.component';

describe('ManageCoursesLayoutComponent', () => {
  let component: ManageCoursesLayoutComponent;
  let fixture: ComponentFixture<ManageCoursesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCoursesLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageCoursesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
