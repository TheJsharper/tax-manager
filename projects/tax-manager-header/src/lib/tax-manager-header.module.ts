import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaxManagerHeaderComponent } from './components/tax-manager-header.component';


@NgModule({
  declarations: [TaxManagerHeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[TaxManagerHeaderComponent]
})
export class TaxManagerHeaderModule { }
