import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryOTPComponent } from './recovery-otp.component';

describe('RecoveryOTPComponent', () => {
  let component: RecoveryOTPComponent;
  let fixture: ComponentFixture<RecoveryOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveryOTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
