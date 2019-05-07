import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  /**
   * 
   * @param icon The icon to be converted to a path
   * 
   * Converts icon to path for use in displaying custom icon as map location marker
   */
  public ConvertIconUrl(icon) {
    let orig = icon;
    let iconUrl = `./assets/${orig}.png`;
    return { url: iconUrl, scaledSize: { width: 40, height: 60 } };
  }
}
