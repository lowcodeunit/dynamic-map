import { NgModule } from '@angular/core';
import { FathymSharedModule } from '@lcu-ide/common';
import { AgmCoreModule } from '@agm/core';
import { DynamicMapComponent } from './controls/dynamic-map/dynamic-map.component';
import { MatIconModule, MatSelectModule, MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { AddMapMarkerComponent } from './controls/dynamic-map/add-map-marker/add-map-marker.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicMapComponent, AddMapMarkerComponent],
  imports: [
    FathymSharedModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCvvqYY9pMUpRSKl721rPEiN4KlKIpCImg'}),
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [DynamicMapComponent],
  entryComponents: [DynamicMapComponent, AddMapMarkerComponent]
})
export class DynamicMapModule { }
