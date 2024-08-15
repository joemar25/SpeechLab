import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCommentsComponent } from './class-comments.component';

describe('ClassCommentsComponent', () => {
  let component: ClassCommentsComponent;
  let fixture: ComponentFixture<ClassCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
