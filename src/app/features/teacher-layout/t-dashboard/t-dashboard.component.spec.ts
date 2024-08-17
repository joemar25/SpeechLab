import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDashboardComponent } from './t-dashboard.component';

describe('TDashboardComponent', () => {
  let component: TDashboardComponent;
  let fixture: ComponentFixture<TDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
