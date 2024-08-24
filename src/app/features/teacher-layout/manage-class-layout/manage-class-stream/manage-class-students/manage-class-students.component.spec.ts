import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassStudentsComponent } from './manage-class-students.component';

describe('ManageClassStudentsComponent', () => {
  let component: ManageClassStudentsComponent;
  let fixture: ComponentFixture<ManageClassStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageClassStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageClassStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
