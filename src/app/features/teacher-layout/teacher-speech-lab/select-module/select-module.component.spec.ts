import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModuleComponent } from './select-module.component';

describe('SelectModuleComponent', () => {
  let component: SelectModuleComponent;
  let fixture: ComponentFixture<SelectModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
