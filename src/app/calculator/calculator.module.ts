import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalculatorComponent} from '@app/calculator/pages';
import {FormsModule} from '@angular/forms';
import {CalculatorRoutingModule} from './calculator.routing';
import {
  EmployeesTableComponent,
  SalaryCalculatorComponent
} from '@app/calculator/components';
import {SharedModule} from '@app/shared';

@NgModule({
  declarations: [
    CalculatorComponent,
    EmployeesTableComponent,
    SalaryCalculatorComponent
  ],
  imports: [CalculatorRoutingModule, CommonModule, FormsModule, SharedModule]
})
export class CalculatorModule {}
