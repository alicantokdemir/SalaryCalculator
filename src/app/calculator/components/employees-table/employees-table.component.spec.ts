import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CurrencyPipe} from '@angular/common';

import {EmployeesTableComponent} from './employees-table.component';
import {By} from '@angular/platform-browser';
import {Employee} from '@app/model';

describe('EmployeesTableComponent', () => {
  let component: EmployeesTableComponent;
  let fixture: ComponentFixture<EmployeesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show a table if employee length is 0', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('table'))).toBe(null);
  });

  it('should show all employees as a row', () => {
    const compiled = fixture.debugElement;
    const employees = [
      new Employee({name: 'testEmployee1', salary: 1000}),
      new Employee({name: 'testEmployee2', salary: 2000}),
      new Employee({name: 'testEmployee3', salary: 3000})
    ];
    component.employees = employees;
    fixture.detectChanges();
    const allRows = compiled.queryAll(By.css('table tbody tr'));
    expect(allRows).toBeTruthy();
    if (allRows) {
      expect(allRows.length - 2).toBe(employees.length); // exclude total header and totalSalary rows
    }
  });

  it('should calculate and show total salaries', () => {
    const compiled = fixture.debugElement;
    const employees = [
      new Employee({name: 'testEmployee1', salary: 1000}),
      new Employee({name: 'testEmployee2', salary: 2000}),
      new Employee({name: 'testEmployee3', salary: 3000})
    ];
    component.employees = employees;
    fixture.detectChanges();
    const totalSalaryEl = compiled.query(
      By.css('table tbody tr:last-child td:last-child')
    );
    const currencyPipe = new CurrencyPipe('en-US');
    if (totalSalaryEl) {
      expect(totalSalaryEl.nativeElement.textContent).toBe(
        currencyPipe.transform(
          employees.map(emp => emp.salary).reduce((e1, e2) => e1 + e2, 0),
          'R$ '
        )
      );
    }
  });
});
