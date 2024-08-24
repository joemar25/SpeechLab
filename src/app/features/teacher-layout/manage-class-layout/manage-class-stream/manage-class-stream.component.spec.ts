import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassStreamComponent } from './manage-class-stream.component';

describe('ManageClassStreamComponent', () => {
  let component: ManageClassStreamComponent;
  let fixture: ComponentFixture<ManageClassStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageClassStreamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageClassStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
