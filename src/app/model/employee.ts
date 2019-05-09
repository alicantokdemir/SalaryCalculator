export class Employee {
  id?: number;
  name = '';
  salary: number;
  constructor(employeeInfo?: Partial<Employee>) {
    Object.assign(this, employeeInfo || {});
  }
}
