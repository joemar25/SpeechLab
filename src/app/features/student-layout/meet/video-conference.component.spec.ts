import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoConferenceComponent } from './video-conference.component';

describe('VideoConferenceComponent', () => {
  let component: VideoConferenceComponent;
  let fixture: ComponentFixture<VideoConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoConferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
