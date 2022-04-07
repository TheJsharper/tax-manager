import { VATRoutingModule } from './vat-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VatCalculatorComponent } from './vat-calculator.component';
import { MatSelectModule } from '@angular/material/select';
import { VatCalculatorService } from './vat-calculator.service';
import { VatCalculatorService2 } from './vat-calculator.service2';

@NgModule({
  declarations: [VatCalculatorComponent],
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule,VATRoutingModule],
  exports: [VatCalculatorComponent],
  providers: [VatCalculatorService, VatCalculatorService2],
})
export class VatCalculatorModule {}
