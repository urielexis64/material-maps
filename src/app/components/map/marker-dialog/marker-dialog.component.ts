import { Component, Inject } from '@angular/core';
import { Marker } from '../../../classes/marker.class';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-marker-dialog',
  templateUrl: './marker-dialog.component.html',
  styleUrls: ['./marker-dialog.component.css'],
})
export class MarkerDialogComponent {
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<Marker>,
    @Inject(MAT_DIALOG_DATA) public data: Marker
  ) {
    this.form = formBuilder.group({ title: data.title, desc: data.desc });
  }

  saveChanges() {
    this.dialogRef.close(this.form.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
