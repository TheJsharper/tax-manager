import { Routes } from '@angular/router';
import { VatBusinessLogicService } from './services/vat-business-logic.service';
import { VatCalculatorService } from './services/vat-calculator.service';
import { VatCalculatorComponent } from './vat-calculator.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const routes: Routes = [
    {
        path: '',
        component: VatCalculatorComponent,
        providers: [
          VatCalculatorService, VatBusinessLogicService, provideHttpClient(withFetch())
        ]
    }
];
/*
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VATRoutingModule { }*/