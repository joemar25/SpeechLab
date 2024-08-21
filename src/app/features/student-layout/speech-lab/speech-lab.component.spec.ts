import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechLabComponent } from './speech-lab.component';

describe('SpeechLabComponent', () => {
  let component: SpeechLabComponent;
  let fixture: ComponentFixture<SpeechLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeechLabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeechLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
