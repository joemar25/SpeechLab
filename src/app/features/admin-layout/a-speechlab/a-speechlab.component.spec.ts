import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASpeechlabComponent } from './a-speechlab.component';

describe('ASpeechlabComponent', () => {
  let component: ASpeechlabComponent;
  let fixture: ComponentFixture<ASpeechlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ASpeechlabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ASpeechlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
