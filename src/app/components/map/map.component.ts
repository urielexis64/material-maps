import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MarkerDialogComponent } from './marker-dialog/marker-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  markers: Marker[] = [];
  lat = 51.678418;
  lng = 7.809007;

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {
    this.loadStorage();
  }

  ngOnInit(): void {}

  addMarker(event) {
    const { lat, lng } = event.coords;
    const newMarker = new Marker(lat, lng);
    this.markers.push(newMarker);
    this.saveStorage();
    this.openSnackBar('Marker added!', 'CLOSE');
  }

  removeMarker(index: number) {
    const removed = this.markers.splice(index, 1);
    this.saveStorage();
    this.openSnackBar('Marker removed!', 'UNDO', removed);
  }

  removeAllMarkers() {
    this.markers = [];
    this.saveStorage();
  }

  openSnackBar(message: string, action: string, data?: Marker[]) {
    this._snackBar
      .open(message, action, {
        duration: 2000,
        data,
      })
      .onAction()
      .subscribe(() => {
        if (data) {
          this.markers.push(...data);
        }
      });
  }

  openDialog(marker: Marker): void {
    const dialogRef = this.dialog.open(MarkerDialogComponent, {
      width: '250px',
      data: {
        title: marker.title,
        desc: marker.desc,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        marker.title = result.title;
        marker.desc = result.desc;
        this.saveStorage();
        this.openSnackBar('Saved changes!', 'CLOSE');
      }
    });
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  loadStorage() {
    const storage = localStorage.getItem('markers');
    if (storage) this.markers = JSON.parse(storage);
  }
}
