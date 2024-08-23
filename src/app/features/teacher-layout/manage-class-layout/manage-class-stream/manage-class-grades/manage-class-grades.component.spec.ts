import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassGradesComponent } from './manage-class-grades.component';

describe('ManageClassGradesComponent', () => {
  let component: ManageClassGradesComponent;
  let fixture: ComponentFixture<ManageClassGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageClassGradesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageClassGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
