import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassLayoutComponent } from './manage-class-layout.component';

describe('ManageClassLayoutComponent', () => {
  let component: ManageClassLayoutComponent;
  let fixture: ComponentFixture<ManageClassLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageClassLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageClassLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
