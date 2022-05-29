import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeweleryComponent } from './jewelery.component';

describe('JeweleryComponent', () => {
  let component: JeweleryComponent;
  let fixture: ComponentFixture<JeweleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeweleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeweleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
