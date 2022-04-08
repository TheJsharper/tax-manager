import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { VatCalculatorComponent } from './vat-calculator.component';
import { VatCalculatorService } from './vat-calculator.service';
import { VATRoutingModule } from './vat-routing.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [VatCalculatorComponent],
  imports: [CommonModule, ReactiveFormsModule, 
    MatSelectModule,
    VATRoutingModule, 
    HttpClientModule,
    MatFormFieldModule,
   MatRadioModule, 
   MatIconModule, 
   MatInputModule,
   MatCheckboxModule,
   MatSlideToggleModule
  ],
  exports: [VatCalculatorComponent],
  providers: [VatCalculatorService],
})
export class VatCalculatorModule { }
