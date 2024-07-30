import { Component, inject } from '@angular/core';

// @angular/material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule, MatDialogConfig } from '@angular/material/dialog';

// cmp
import { CrossrefProcessingGridComponent } from './crossref-processing-grid/crossref-processing-grid.component';
import { CrossrefProcessingUploadModalComponent } from './crossref-processing-upload-modal/crossref-processing-upload-modal.component';

@Component({
  selector: 'app-hub-crossref-processing',
  standalone: true,
  templateUrl: './hub-crossref-processing.component.html',
  styleUrl: './hub-crossref-processing.component.scss',
  imports: [
    // cmp
    CrossrefProcessingGridComponent,
    //  @angular/material
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
  ]
})

export class HubCrossrefProcessingComponent {

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(
      CrossrefProcessingUploadModalComponent,
      { panelClass: 'p--mat-mdc-dialog-panel' }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
