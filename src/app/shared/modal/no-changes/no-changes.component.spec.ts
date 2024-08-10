import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/features/student-layout/task/task.component.spec.ts
import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskComponent);
========
import { NoChangesComponent } from './no-changes.component';

describe('NoChangesComponent', () => {
  let component: NoChangesComponent;
  let fixture: ComponentFixture<NoChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoChangesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoChangesComponent);
>>>>>>>> 936418df1c6f710a229b7c3d5a46b9a45995b9f1:src/app/shared/modal/no-changes/no-changes.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
