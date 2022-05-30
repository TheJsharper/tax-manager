import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaxManagerHeaderModule } from "@tax-manager/tax-manager-header";
import { SharedModule, TaxManagerHeaderService } from '@tax-manager/shared';
import { RxVatCalculatorRoutingModule } from "./rx-vat-calculator-routing.module";
import { RxVatCalculatorComponent } from "./rx-vat-calculator.component";

@NgModule({
    declarations: [RxVatCalculatorComponent],
    imports: [
        SharedModule,
        CommonModule,
        TaxManagerHeaderModule.config({
            name: 'from rx-vat-calculator',
            providers: [TaxManagerHeaderService]
        }),
        RxVatCalculatorRoutingModule
    ],
    exports: [RxVatCalculatorComponent]
})
export class RxVatCalculatorModule {
    constructor(taxManagerHeaderService: TaxManagerHeaderService) {
        taxManagerHeaderService.settings.next({ name: 'Rx Tax Manager' });
        taxManagerHeaderService.title = 'Rx Tax Manager';
    }
}