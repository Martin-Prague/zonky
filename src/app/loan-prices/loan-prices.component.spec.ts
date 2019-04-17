import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPricesComponent } from './loan-prices.component';

describe('LoanPricesComponent', () => {
  let component: LoanPricesComponent;
  let fixture: ComponentFixture<LoanPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
