import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentElementComponent } from './elements/display/content-element/content-element.component';
import { SharedElementComponent } from './elements/display/shared-element/shared-element.component';
import { SharedComponent } from './controls/display/shared/shared.component';
import { ContentComponent } from './controls/display/content/content.component';
import { FlexComponent } from './controls/layout/flex/flex.component';
import { FlexElementComponent } from './elements/layout/flex-element/flex-element.component';
import { LcuElementComponent } from './elements/lcu-element.component';

@NgModule({
  declarations: [ContentElementComponent, SharedElementComponent, SharedComponent, ContentComponent, FlexComponent, FlexElementComponent],
  imports: [CommonModule],
  exports: [ContentElementComponent, SharedElementComponent, SharedComponent, ContentComponent, FlexComponent, FlexElementComponent],
  entryComponents: [ContentElementComponent, SharedElementComponent, SharedComponent, ContentComponent, FlexComponent, FlexElementComponent]
})
export class LcuApplicationsModule {}
