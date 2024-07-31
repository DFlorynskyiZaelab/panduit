// @angular
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

// @angular/material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule, StepperOrientation } from '@angular/material/stepper';



@Component({
  selector: 'app-crossref-processing-upload-modal',
  standalone: true,
  templateUrl: './crossref-processing-upload-modal.component.html',
  styleUrl: './crossref-processing-upload-modal.component.scss',
  providers: [
    // {
    //   provide: STEPPER_GLOBAL_OPTIONS,
    //   useValue: { displayDefaultIndicatorType: false },
    // },
  ],
  imports: [
    // @angular
    CommonModule,
    // @angular/material
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,

    MatStepperModule,
    ReactiveFormsModule
  ]
})

export class CrossrefProcessingUploadModalComponent {


  @ViewChild('fileInput') fileInput!: ElementRef;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<CrossrefProcessingUploadModalComponent>) {

  }

  ngOnInit() {
   
  this.firstFormGroup = this._formBuilder.group({firstCtrl: ['']});
  this.secondFormGroup = this._formBuilder.group({secondCtrl: ['']});
  }



  onClose(): void {
    this.dialogRef.close();
  }

  downloadFile() {

  }

  file: File | null = null;

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  handleFile(file: File) {
    const allowedExtensions = ['xls', 'xlsx'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (fileExtension && allowedExtensions.includes(fileExtension)) {
      this.file = file;
    } else {
      alert('Only Excel files are allowed.');
    }
  }

  removeFile() {
    this.file = null;
  }

}
