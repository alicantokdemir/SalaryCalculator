import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Employee, SalaryCalc} from '@app/model';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.scss']
})
export class SalaryCalculatorComponent implements OnInit {
  @Output() submitEmployeeForm: EventEmitter<Employee> = new EventEmitter();

  employee: Employee = new Employee();

  calc: SalaryCalc = new SalaryCalc();

  constructor() {}

  ngOnInit() {}

  onSubmitEmployeeForm(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.employee.salary = this.calc.total;
    this.submitEmployeeForm.emit(this.employee);
    this.employee = new Employee();
    this.calc = new SalaryCalc();
    form.resetForm({
      employeeName: this.employee.name,
      baseSalary: this.calc.baseSalary,
      totalWorkingHours: this.calc.totalWorkingHours
    });
  }
}
