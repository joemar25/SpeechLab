import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AContentmanagementComponent } from './a-contentmanagement.component';

describe('AContentmanagementComponent', () => {
  let component: AContentmanagementComponent;
  let fixture: ComponentFixture<AContentmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AContentmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AContentmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
