import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechAnalyzerComponent } from './speech-analyzer.component';

describe('SpeechAnalyzerComponent', () => {
  let component: SpeechAnalyzerComponent;
  let fixture: ComponentFixture<SpeechAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeechAnalyzerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeechAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
