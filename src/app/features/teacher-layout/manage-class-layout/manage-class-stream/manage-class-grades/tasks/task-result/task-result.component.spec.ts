import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskResultComponent } from './task-result.component';

describe('TaskResultComponent', () => {
  let component: TaskResultComponent;
  let fixture: ComponentFixture<TaskResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
