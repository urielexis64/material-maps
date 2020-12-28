import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBODpHy9-3xzW4X6uol7lSjGp8NQIqW60I',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
