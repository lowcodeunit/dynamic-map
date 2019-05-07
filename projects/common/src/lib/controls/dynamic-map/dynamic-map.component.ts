import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IndividualMap } from '../../models/individual-map.model';
import { AddMapMarkerComponent } from './add-map-marker/add-map-marker.component';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'lcu-dynamic-map',
  templateUrl: './dynamic-map.component.html',
  styleUrls: ['./dynamic-map.component.css']
})
export class DynamicMapComponent implements OnInit {

  // FIELDS

  /**
   * The public map model converted from the passed IndividualMap input
   */
  public CurrentMapModel: IndividualMap;

  // PROPERTIES
  private isDoubleClick: boolean = false;

  private expectedDoubleClickElapsedTime: number = 500;

  /**
   * The map model object (IndividualMap model) containing all the settings for the map to be displayed
   */
  @Input() mapModel?: IndividualMap = {
    title: 'Default Map',
    origin: { lat: 40.037757, lng: -105.278324 },
    zoom: 13,
    locationList: [
      { title: 'Favorite steak house', lat: 40.017557, lng: -105.278199, icon: 'restaurant' },
      { title: 'Favorite UNESCO', lat: 40.027657, lng: -105.288199, icon: 'UNESCO' },
      { title: 'Nice museum', lat: 40.037757, lng: -105.298199, icon: 'museum' },
      { title: 'Good brewery', lat: 40.047857, lng: -105.268199, icon: 'brewery' },
      { title: 'Favorite ski area', lat: 40.057557, lng: -105.288199, icon: 'ski area' },
      { title: 'Favorite vineyard', lat: 40.060657, lng: -105.298199, icon: 'vineyard' },
      { title: 'Nice golf course', lat: 40.037757, lng: -105.258199, icon: 'golf course' },
      { title: 'Good lodging', lat: 40.037757, lng: -105.278199, icon: 'lodging' },
      { title: 'Nice national park', lat: 40.060657, lng: -105.278199, icon: 'national park' },
      { title: 'Good bar', lat: 40.017557, lng: -105.288199, icon: 'bar' }
    ]
  };

  // CONSTRUCTORS
  constructor(private dialog: MatDialog, private mapService: MapService) { }

  // LIFE CYCLE
  ngOnInit() {
    this.CurrentMapModel = this.mapModel;
    this.CurrentMapModel.locationList.forEach(loc => {
      loc.icon = this.mapService.ConvertIconUrl(loc.icon);
    });
    // this.CurrentMapModel.locationList = this.convertMarkerUrls(this.CurrentMapModel.locationList);
  }

  // API METHODS

  /**
   * 
   * @param event The event passed in upon user clicking the map
   * 
   * Runs when user clicks location on map. Modal displays prompting user to enter info about custom location marker
   */
  public OnChoseLocation(event): void {
    setTimeout(x => { // set timeout to half a second to wait for possibility of double click (mimic Google Maps)
      if (!this.isDoubleClick) {
        const dialogRef = this.dialog.open(AddMapMarkerComponent, {
          data: {
            lat: event.coords.lat,
            lng: event.coords.lng
          }
        });
        dialogRef.afterClosed().subscribe(res => {
          if (res) {
            this.CurrentMapModel.locationList.push(res);
          }
        });
      }
    }, this.expectedDoubleClickElapsedTime);
  }

  public OnMapDoubleClicked(event) {
    this.isDoubleClick = true;
    console.log('double clicked');
    setTimeout(x => {
      this.isDoubleClick = false;
    },500); // about after enough time it takes to zoom, turn off the "double-clicked" flag
  }
  // HELPERS

}
