import { NgModule } from '@angular/core';
import { FathymSharedModule } from '@lcu-ide/common';
import { DynamicMapComponent } from './controls/dynamic-map/dynamic-map.component';

@NgModule({
  declarations: [DynamicMapComponent],
  imports: [
    FathymSharedModule
  ],
  exports: [DynamicMapComponent],
  entryComponents: [DynamicMapComponent]
})
export class DynamicMapModule { }
