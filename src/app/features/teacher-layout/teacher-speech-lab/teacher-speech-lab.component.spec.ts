import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSpeechLabComponent } from './teacher-speech-lab.component';

describe('TeacherSpeechLabComponent', () => {
  let component: TeacherSpeechLabComponent;
  let fixture: ComponentFixture<TeacherSpeechLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherSpeechLabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherSpeechLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
