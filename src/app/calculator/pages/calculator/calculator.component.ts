import {Component, OnInit} from '@angular/core';
import {SalaryCalc, Employee} from '@app/model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  employees: Employee[] = [];

  employee: Employee = new Employee({
    name: '',
    salary: undefined
  });

  calc: SalaryCalc = new SalaryCalc({
    baseSalary: 998
  });

  constructor() {}

  ngOnInit() {}
}
