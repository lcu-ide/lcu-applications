import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppsManagerElementComponent, SELECTOR_APPS_MANAGER_ELEMENT } from '@lcu-ide/lcu-applications-common';
import { LcuApplicationsModule } from '@lcu-ide/lcu-applications-common';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserAnimationsModule, BrowserModule, LcuApplicationsModule]
})
export class AppModule implements DoBootstrap {
  //  Constructors
  constructor(protected injector: Injector) {}

  //  Life Cycle
  public ngDoBootstrap() {
    const panel = createCustomElement(AppsManagerElementComponent, { injector: this.injector });

    customElements.define(SELECTOR_APPS_MANAGER_ELEMENT, panel);
  }
}
