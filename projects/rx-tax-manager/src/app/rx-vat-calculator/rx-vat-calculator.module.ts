import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaxManagerHeaderModule } from "@tax-manager/tax-manager-header";
import { RxVatCalculatorRoutingModule } from "./rx-vat-calculator-routing.module";
import { RxVatCalculatorComponent } from "./rx-vat-calculator.component";

@NgModule({
    declarations: [RxVatCalculatorComponent],
    imports: [CommonModule,
        TaxManagerHeaderModule,
        RxVatCalculatorRoutingModule
    ],
    exports: [RxVatCalculatorComponent]
})
export class RxVatCalculatorModule {
    /*constructor(taxManagerHeaderService: TaxManagerHeaderSevice){
        taxManagerHeaderService
    }*/
 }