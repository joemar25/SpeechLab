import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassworkViewTaskComponent } from './classwork-view-task.component';

describe('ClassworkViewTaskComponent', () => {
  let component: ClassworkViewTaskComponent;
  let fixture: ComponentFixture<ClassworkViewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassworkViewTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassworkViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
