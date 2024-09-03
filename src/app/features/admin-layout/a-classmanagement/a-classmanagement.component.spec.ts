import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AClassmanagementComponent } from './a-classmanagement.component';

describe('AClassmanagementComponent', () => {
  let component: AClassmanagementComponent;
  let fixture: ComponentFixture<AClassmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AClassmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AClassmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
