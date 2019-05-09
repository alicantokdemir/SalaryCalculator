import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Employee} from '@app/model';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {
  @Output() deleteEmployee: EventEmitter<Employee> = new EventEmitter();

  @Input() employees: Employee[] = [];

  constructor() {}

  ngOnInit() {}

  get totalSalaries() {
    return this.employees.map(emp => emp.salary).reduce((e1, e2) => e1 + e2, 0);
  }
}
