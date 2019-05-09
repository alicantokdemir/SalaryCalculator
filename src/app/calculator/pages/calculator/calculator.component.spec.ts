import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CalculatorComponent} from './calculator.component';
import {
  SalaryCalculatorComponent,
  EmployeesTableComponent
} from '@app/calculator/components';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '@app/shared';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, SharedModule],
      declarations: [
        CalculatorComponent,
        SalaryCalculatorComponent,
        EmployeesTableComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render salary-calculator', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-salary-calculator')).toBeTruthy();
  });

  it('should render employees-table', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-employees-table')).toBeTruthy();
  });
});
