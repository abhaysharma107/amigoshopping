import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordSetupComponent } from './new-password-setup.component';

describe('NewPasswordSetupComponent', () => {
  let component: NewPasswordSetupComponent;
  let fixture: ComponentFixture<NewPasswordSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPasswordSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPasswordSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
