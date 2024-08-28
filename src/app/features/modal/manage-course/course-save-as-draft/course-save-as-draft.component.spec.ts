import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSaveAsDraftComponent } from './course-save-as-draft.component';

describe('CourseSaveAsDraftComponent', () => {
  let component: CourseSaveAsDraftComponent;
  let fixture: ComponentFixture<CourseSaveAsDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSaveAsDraftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseSaveAsDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
