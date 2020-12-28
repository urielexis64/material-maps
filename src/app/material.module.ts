import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
})
export class MaterialModule {}
