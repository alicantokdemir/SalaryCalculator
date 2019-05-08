import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalculatorComponent} from './pages/calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import {CalculatorRoutingModule} from './calculator.routing';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [CalculatorRoutingModule, CommonModule, FormsModule]
})
export class CalculatorModule {}
