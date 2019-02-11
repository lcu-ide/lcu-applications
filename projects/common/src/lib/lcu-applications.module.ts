import { NgModule } from '@angular/core';
import { LazyElementModule } from '@lowcodeunit/lazy-element';
import { FathymSharedModule } from '@lcu-ide/common';
import { ContentElementComponent } from './elements/display/content-element/content-element.component';
import { SharedElementComponent } from './elements/display/shared-element/shared-element.component';
import { ContentComponent } from './controls/display/content/content.component';
import { FlexComponent } from './controls/layout/flex/flex.component';
import { FlexElementComponent } from './elements/layout/flex-element/flex-element.component';
import { LcuMaterialApplicationsModule } from './frameworks/material/lcu-material-applications.module';
import { ActionElementComponent } from './elements/display/action-element/action-element.component';
import { StackedElementComponent } from './elements/layout/stacked-element/stacked-element.component';
import { SwitchCaseElementComponent } from './elements/layout/switch-case-element/switch-case-element.component';

@NgModule({
  declarations: [
    ContentElementComponent,
    SharedElementComponent,
    ContentComponent,
    FlexComponent,
    FlexElementComponent,
    ActionElementComponent,
    StackedElementComponent,
    SwitchCaseElementComponent
  ],
  imports: [FathymSharedModule, LcuMaterialApplicationsModule, LazyElementModule],
  exports: [
    ContentElementComponent,
    SharedElementComponent,
    ContentComponent,
    FlexComponent,
    FlexElementComponent,
    ActionElementComponent,
    StackedElementComponent,
    SwitchCaseElementComponent
  ],
  entryComponents: [
    ContentElementComponent,
    SharedElementComponent,
    ContentComponent,
    FlexComponent,
    FlexElementComponent,
    ActionElementComponent,
    StackedElementComponent,
    SwitchCaseElementComponent
  ]
})
export class LcuApplicationsModule {}
