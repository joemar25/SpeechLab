import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTeachersComponent } from './invite-teachers.component';

describe('InviteTeachersComponent', () => {
  let component: InviteTeachersComponent;
  let fixture: ComponentFixture<InviteTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
