import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutheenticationComponent } from './autheentication.component';

describe('AutheenticationComponent', () => {
  let component: AutheenticationComponent;
  let fixture: ComponentFixture<AutheenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutheenticationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutheenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
