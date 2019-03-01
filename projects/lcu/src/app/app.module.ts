import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ContentElementComponent, SELECTOR_CONTENT_ELEMENT } from '@lcu-ide/lcu-applications-common';
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
    const panel = createCustomElement(ContentElementComponent, { injector: this.injector });

    customElements.define(SELECTOR_CONTENT_ELEMENT, panel);
  }
}
