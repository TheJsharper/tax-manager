
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxManagerHeaderService } from './services/tax-manager-header.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[TaxManagerHeaderService]
})
export class SharedModule { }
