import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCertificateComponent } from './course-certificate.component';

describe('CourseCertificateComponent', () => {
  let component: CourseCertificateComponent;
  let fixture: ComponentFixture<CourseCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCertificateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
