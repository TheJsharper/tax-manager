import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TaxManagerHeaderModule } from '@tax-manager/tax-manager-header';
import { TaxManagerHeaderService } from '@tax-manager/shared';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TaxManagerHeaderModule.config({
      name: 'from vat-calculator',
      providers: [TaxManagerHeaderService]
    }),
    AppRoutingModule,
    MatIconModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(private taxManagerHeaderService: TaxManagerHeaderService) {
    this.taxManagerHeaderService.settings.next({ name: 'Tax Manager' });
    this.taxManagerHeaderService.title="Tax Manager";
  }
}
