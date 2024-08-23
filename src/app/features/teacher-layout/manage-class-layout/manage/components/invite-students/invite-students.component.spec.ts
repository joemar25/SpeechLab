import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteStudentsComponent } from './invite-students.component';

describe('InviteStudentsComponent', () => {
  let component: InviteStudentsComponent;
  let fixture: ComponentFixture<InviteStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
