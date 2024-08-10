import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
