import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VatCalculatorComponent } from './vat-calculator.component';

const routes: Routes = [
    {
        path: '',
        component: VatCalculatorComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VATRoutingModule { }