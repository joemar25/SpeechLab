import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToSpeechComponent } from './text-to-speech.component';

describe('TextToSpeechComponent', () => {
  let component: TextToSpeechComponent;
  let fixture: ComponentFixture<TextToSpeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextToSpeechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextToSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
