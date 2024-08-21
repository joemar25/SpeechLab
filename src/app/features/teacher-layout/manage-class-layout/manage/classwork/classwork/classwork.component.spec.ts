import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassworkComponent } from './classwork.component';

describe('ClassworkComponent', () => {
  let component: ClassworkComponent;
  let fixture: ComponentFixture<ClassworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
