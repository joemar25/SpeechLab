import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDashboardComponent } from './manual-dashboard.component';

describe('ManualDashboardComponent', () => {
  let component: ManualDashboardComponent;
  let fixture: ComponentFixture<ManualDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
