import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LcuApplicationsModule } from '@lcu-ide/lcu-applications-common';
import { FathymSharedModule, LCUServiceSettings } from '@lcu-ide/common';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const settings = FathymSharedModule.DefaultServiceSettings(environment);

// settings.APIRoot = 'http://www.lowcodeunit.com';
settings.APIRoot = 'http://www.pizzapedalr.com';

@NgModule({
  declarations: [AppComponent],
  imports: [FathymSharedModule.forRoot(), BrowserModule, BrowserAnimationsModule, LcuApplicationsModule.forRoot()],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: settings
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
