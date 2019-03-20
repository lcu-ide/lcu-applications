import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LcuApplicationsModule } from '@lcu-ide/lcu-applications-common';
import { FathymSharedModule, LCUServiceSettings } from '@lcu-ide/common';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [FathymSharedModule.forRoot(), BrowserModule, BrowserAnimationsModule, LcuApplicationsModule.forRoot()],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
