import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { MarkerDialogComponent } from './components/map/marker-dialog/marker-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [MarkerDialogComponent],
  declarations: [AppComponent, MapComponent, MarkerDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBODpHy9-3xzW4X6uol7lSjGp8NQIqW60I',
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
