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
  MatExpansionModule
} from '@angular/material';
import { FathymSharedModule } from '@lcu-ide/common';

const modules = [
  FlexLayoutModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [FathymSharedModule, ...modules],
  exports: [...modules],
  entryComponents: []
})
export class LcuMaterialApplicationsModule {}
