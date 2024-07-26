import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfStudyModeComponent } from './self-study-mode.component';

describe('SelfStudyModeComponent', () => {
  let component: SelfStudyModeComponent;
  let fixture: ComponentFixture<SelfStudyModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfStudyModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfStudyModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
