import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADashboardComponent } from './a-dashboard.component';

describe('ADashboardComponent', () => {
  let component: ADashboardComponent;
  let fixture: ComponentFixture<ADashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ADashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
