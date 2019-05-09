import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CalculatorComponent} from '@app/calculator/pages';

const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule {}
