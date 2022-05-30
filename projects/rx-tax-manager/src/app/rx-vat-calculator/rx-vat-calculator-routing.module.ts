import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxVatCalculatorComponent } from './rx-vat-calculator.component';

const routes: Routes = [
    {
        path: '',
        component: RxVatCalculatorComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxVatCalculatorRoutingModule { }