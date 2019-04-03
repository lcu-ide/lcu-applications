import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LcuApplicationsModule } from '@lcu-ide/lcu-applications-common';
import { FathymSharedModule, LCUServiceSettings } from '@lcu-ide/common';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyElementModule } from '@lowcodeunit/lazy-element';

export const settings = FathymSharedModule.DefaultServiceSettings(environment);

// settings.APIRoot = 'http://www.lowcodeunit.com';
// settings.APIRoot = 'http://www.habistack.com';

@NgModule({
  declarations: [AppComponent],
  imports: [FathymSharedModule.forRoot(), BrowserModule, BrowserAnimationsModule, LazyElementModule, LcuApplicationsModule.forRoot()],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: settings
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
