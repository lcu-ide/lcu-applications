import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule
} from '@angular/material';
import { FathymSharedModule } from '@lcu-ide/common';

const modules = [
  FlexLayoutModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [FathymSharedModule, ...modules],
  exports: [...modules],
  entryComponents: []
})
export class LcuMaterialApplicationsModule {}
