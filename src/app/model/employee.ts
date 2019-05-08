export class Employee {
  name: string;
  salary: number;
  constructor(employeeInfo: Partial<Employee>) {
    Object.assign(this, employeeInfo);
  }
}
