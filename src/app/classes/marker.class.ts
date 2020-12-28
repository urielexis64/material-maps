export class Marker {
  public lat: number;
  public lng: number;
  public title = 'No title';
  public desc = 'No description';
  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
