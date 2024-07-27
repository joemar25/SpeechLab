import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLabComponent } from './class-lab.component';

describe('ClassLabComponent', () => {
  let component: ClassLabComponent;
  let fixture: ComponentFixture<ClassLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassLabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
