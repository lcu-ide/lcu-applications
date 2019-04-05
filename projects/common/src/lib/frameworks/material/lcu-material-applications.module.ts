import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatCardModule,
  MatExpansionModule,
  MatChipsModule,
  MatCheckboxModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FathymSharedModule } from '@lcu-ide/common';

const modules = [
  FlexLayoutModule,
  DragDropModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [FathymSharedModule, ...modules],
  exports: [...modules],
  entryComponents: []
})
export class LcuMaterialApplicationsModule {}
