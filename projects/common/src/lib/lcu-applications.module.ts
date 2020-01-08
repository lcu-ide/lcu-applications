import { NgModule, ModuleWithProviders } from '@angular/core';
import { LazyElementModule } from '@lowcodeunit/lazy-element';
import { FathymSharedModule } from '@lcu/common';
import { ContentElementComponent } from './elements/display/content-element/content-element.component';
import { SharedElementComponent } from './elements/display/shared-element/shared-element.component';
import { ContentComponent } from './controls/display/content/content.component';
import { FlexComponent } from './controls/layout/flex/flex.component';
import { FlexElementComponent } from './elements/layout/flex-element/flex-element.component';
import { LcuMaterialApplicationsModule } from './frameworks/material/lcu-material-applications.module';
import { ActionElementComponent } from './elements/display/action-element/action-element.component';
import { StackedElementComponent } from './elements/layout/stacked-element/stacked-element.component';
import { SwitchCaseElementComponent } from './elements/layout/switch-case-element/switch-case-element.component';
import { LcuAppsStateManagerContext } from './state/lcu-apps-state-manager.context';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppsManagerElementComponent } from './elements/ide/apps-manager-element/apps-manager-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

const comps = [
  ContentElementComponent,
  SharedElementComponent,
  ContentComponent,
  FlexComponent,
  FlexElementComponent,
  ActionElementComponent,
  StackedElementComponent,
  SwitchCaseElementComponent,
  AppsManagerElementComponent
];

@NgModule({
  declarations: [...comps],
  imports: [
    FathymSharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LcuMaterialApplicationsModule,
    LazyElementModule
  ],
  exports: [...comps],
  entryComponents: [...comps]
})
export class LcuApplicationsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuApplicationsModule,
      providers: [LcuAppsStateManagerContext]
    };
  }
}
