import {Injectable} from '@angular/core';
import {Employee} from '@app/model';

let MOCKEMPLOYEES = [];

function generateId() {
  return Math.round(Math.random() * 1000000);
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {}

  /**
   * Saves a new employee
   * @param employee Employee obj
   * @returns New employee with id
   */
  addEmployee(employee: Employee): Promise<Employee> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newEmployee = Object.assign({}, employee, {id: generateId()});
        MOCKEMPLOYEES.push(newEmployee);
        resolve(newEmployee);
      }, 100);
    });
  }

  /**
   * Deletes the employee
   * @param id Employee id
   */
  deleteEmployee(id: number): Promise<undefined> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        MOCKEMPLOYEES = MOCKEMPLOYEES.filter(emp => emp.id !== id);
        console.log('mok employees', MOCKEMPLOYEES);
        resolve();
      }, 100);
    });
  }

  /**
   * Fetches all employees from api
   * @returns Employees array
   */
  getEmployees(): Promise<Employee[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(JSON.parse(JSON.stringify(MOCKEMPLOYEES)));
      }, 100);
    });
  }
}
