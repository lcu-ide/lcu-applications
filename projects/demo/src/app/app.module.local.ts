import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LcuApplicationsModule } from '@lcu-ide/lcu-applications-common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LcuApplicationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
