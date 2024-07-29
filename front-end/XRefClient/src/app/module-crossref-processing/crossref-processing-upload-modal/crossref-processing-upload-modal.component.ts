// @angular
import { Component } from '@angular/core';

// @angular/material
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-crossref-processing-upload-modal',
  standalone: true,
  templateUrl: './crossref-processing-upload-modal.component.html',
  styleUrl: './crossref-processing-upload-modal.component.scss',  
  imports: [
    MatButtonModule,
    MatDialogModule
  ]
})

export class CrossrefProcessingUploadModalComponent {

}
