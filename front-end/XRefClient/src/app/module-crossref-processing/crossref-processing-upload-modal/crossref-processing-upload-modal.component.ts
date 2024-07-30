// @angular
import { Component, ViewChild, ElementRef } from '@angular/core';

// @angular/material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-crossref-processing-upload-modal',
  standalone: true,
  templateUrl: './crossref-processing-upload-modal.component.html',
  styleUrl: './crossref-processing-upload-modal.component.scss',
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class CrossrefProcessingUploadModalComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private dialogRef: MatDialogRef<CrossrefProcessingUploadModalComponent>) {

  }

  onClose(): void {
    this.dialogRef.close();
  }

  downloadFile() {

  }



}
