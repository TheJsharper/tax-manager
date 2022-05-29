
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaxManagerHeaderModule } from '@tax-manager/tax-manager-header';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    BrowserModule, TaxManagerHeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
