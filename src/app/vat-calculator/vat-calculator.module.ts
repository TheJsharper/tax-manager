import { VATRoutingModule } from './vat-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VatCalculatorComponent } from './vat-calculator.component';
import { MatSelectModule } from '@angular/material/select';
import { VatCalculatorService } from './vat-calculator.service';

@NgModule({
  declarations: [VatCalculatorComponent],
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule,VATRoutingModule],
  exports: [VatCalculatorComponent],
  providers: [VatCalculatorService],
})
export class VatCalculatorModule {}
