export class MapMarker {

    /**
     * The title of the marker which will show upon mouseover
     */
    title: string;

    /**
     * A list of available icons to customize map locations
     */
    icon: 
    'bar' |
    'brewery' |
    'golf course' |
    'lodging' |
    'museum' |
    'national park' |
    'restaurant' |
    'ski area' |
    'UNESCO' |
    'vineyard' |
    null | 
    {};

    /**
     * The latitude of the map marker
     */
    lat: number;

    /**
     * The longitude of the map marker
     */
    lng: number;

    /**
     * 
     * @param icon The object containing data for a single point (a map marker) on a map (<agm-map>)
     */
    constructor(icon: MapMarker) {
        this.title = icon.title;
        this.icon = icon.icon;
        this.lat = icon.lat;
        this.lng = icon.lng;
    }
}