import {Component, OnInit} from '@angular/core';
import {Employee} from '@app/model';
import {ApiService} from '@app/services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  /**
   * All employees
   */
  employees: Employee[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getEmployees().then(employees => {
      this.employees = employees;
    });
  }

  /**
   * Sends new employee to add
   * @param employee Employee object
   */
  onAddEmployee(employee: Employee) {
    this.apiService.addEmployee(employee).then(newEmp => {
      const newEmployees = this.employees.slice(0);
      newEmployees.push(newEmp);
      this.employees = newEmployees;
    });
  }

  /**
   * Deletes employee
   * @param employee Employee object
   */
  onDeleteEmployee(employee: Employee) {
    this.apiService.deleteEmployee(employee.id).then(() => {
      this.employees = this.employees.filter(emp => employee.id !== emp.id);
    });
  }
}
