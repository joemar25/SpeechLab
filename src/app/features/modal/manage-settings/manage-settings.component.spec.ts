import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSettingsComponent } from './manage-settings.component';

describe('ManageSettingsComponent', () => {
  let component: ManageSettingsComponent;
  let fixture: ComponentFixture<ManageSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
