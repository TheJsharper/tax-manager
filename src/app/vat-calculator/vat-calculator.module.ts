import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { VatCalculatorComponent } from './vat-calculator.component';
import { VatCalculatorService } from './vat-calculator.service';
import { VATRoutingModule } from './vat-routing.module';

@NgModule({
  declarations: [VatCalculatorComponent],
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule,VATRoutingModule, HttpClientModule],
  exports: [VatCalculatorComponent],
  providers: [ VatCalculatorService],
})
export class VatCalculatorModule {}
