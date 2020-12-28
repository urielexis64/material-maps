import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  markers: Marker[] = [];
  lat = 51.678418;
  lng = 7.809007;

  constructor() {
    const newMarker = new Marker(51.678418, 7.809007);
    const newMarker2 = new Marker(51.778418, 7.709007);
    this.markers.push(newMarker);
    this.markers.push(newMarker2);
  }

  ngOnInit(): void {}

  addMarker(event) {
    console.log(event);
  }
}
