import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassComponent } from './delete-class.component';

describe('DeleteClassComponent', () => {
  let component: DeleteClassComponent;
  let fixture: ComponentFixture<DeleteClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
