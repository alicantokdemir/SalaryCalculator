import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SalaryCalculatorComponent} from './salary-calculator.component';
import {FormsModule} from '@angular/forms';
import {ErrorMessagesComponent} from '@app/shared/components';

describe('SalaryCalculatorComponent', () => {
  let component: SalaryCalculatorComponent;
  let fixture: ComponentFixture<SalaryCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SalaryCalculatorComponent, ErrorMessagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
