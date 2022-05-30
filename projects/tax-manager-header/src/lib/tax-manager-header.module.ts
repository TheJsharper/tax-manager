import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { TaxManagerHeaderComponent } from './components/tax-manager-header.component';


@NgModule({
  declarations: [TaxManagerHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule, MatToolbarModule
  ],
  exports: [TaxManagerHeaderComponent]
})
export class TaxManagerHeaderModule {
  static config(data: Data): ModuleWithProviders<TaxManagerHeaderModule> {
    return {

      providers: [...data.providers],
      ngModule: TaxManagerHeaderModule,
    };
  }
}

export interface Data {
  name: string;
  providers: Provider[]
}