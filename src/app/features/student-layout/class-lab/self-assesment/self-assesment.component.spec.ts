import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAssesmentComponent } from './self-assesment.component';

describe('SelfAssesmentComponent', () => {
  let component: SelfAssesmentComponent;
  let fixture: ComponentFixture<SelfAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfAssesmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
