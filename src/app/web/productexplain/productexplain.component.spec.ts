import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductexplainComponent } from './productexplain.component';

describe('ProductexplainComponent', () => {
  let component: ProductexplainComponent;
  let fixture: ComponentFixture<ProductexplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductexplainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductexplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
