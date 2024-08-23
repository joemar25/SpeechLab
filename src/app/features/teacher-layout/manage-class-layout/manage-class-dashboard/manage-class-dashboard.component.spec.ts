import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassDashboardComponent } from './manage-class-dashboard.component';

describe('ManageClassDashboardComponent', () => {
  let component: ManageClassDashboardComponent;
  let fixture: ComponentFixture<ManageClassDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageClassDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageClassDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
