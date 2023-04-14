import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FatherAmountComponent } from './father-amount/father-amount.component';
import { ChildAmountComponent } from './child-amount/child-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherAmountComponent,
    ChildAmountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
