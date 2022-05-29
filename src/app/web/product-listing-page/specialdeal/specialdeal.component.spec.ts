import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialdealComponent } from './specialdeal.component';

describe('SpecialdealComponent', () => {
  let component: SpecialdealComponent;
  let fixture: ComponentFixture<SpecialdealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialdealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
