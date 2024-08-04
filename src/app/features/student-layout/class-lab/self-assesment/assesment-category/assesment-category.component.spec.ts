import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentCategoryComponent } from './assesment-category.component';

describe('AssesmentCategoryComponent', () => {
  let component: AssesmentCategoryComponent;
  let fixture: ComponentFixture<AssesmentCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssesmentCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssesmentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
