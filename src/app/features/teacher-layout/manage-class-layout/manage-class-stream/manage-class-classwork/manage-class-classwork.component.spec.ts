import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassClassworkComponent } from './manage-class-classwork.component';

describe('ManageClassClassworkComponent', () => {
  let component: ManageClassClassworkComponent;
  let fixture: ComponentFixture<ManageClassClassworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageClassClassworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageClassClassworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
