// @angular
import { Component, ViewChild } from '@angular/core';
import { HttpUploadService } from '../../app-core/services/http-upload.service';

// @angular/cdk
import { SelectionModel } from '@angular/cdk/collections';

// rxjs
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

// @angular/material
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-crossref-processing-grid',
  standalone: true,
  templateUrl: './crossref-processing-grid.component.html',
  styleUrl: './crossref-processing-grid.component.scss',
  imports: [
    // mat
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCheckboxModule
  ]
})


export class CrossrefProcessingGridComponent {
  gridDataSource = new MatTableDataSource<any>();
  gridDisplayedColumns: string[] = ['select', 'prop1', 'prop2', 'prop3', 'prop4'];
  gridData: any[] = [];
  gridIsLoading = false;
  gridPageResultsLength = 0;

  @ViewChild(MatPaginator) gridPaginator!: MatPaginator;
  @ViewChild(MatSort) gridSort!: MatSort;
  selection = new SelectionModel<any>(true, []);
  
  constructor(private httpUploadService: HttpUploadService) { }
  ngOnInit() {

    this.gridDataSource.sort = this.gridSort;
    this.gridDataSource.paginator = this.gridPaginator;


    // this.httpUploadService.fetchData()
    //   .subscribe((response) => {
    //     debugger;
    //     this.gridData = response;
    //   });
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.gridDataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.gridDataSource.data.length;
    return numSelected === numRows;
  }

  ngAfterViewInit() {
    merge(this.gridSort.sortChange, this.gridPaginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.gridIsLoading = true;
          return this.httpUploadService.fetchData(
            // this.gridSort.active,
            // this.gridSort.direction,
            // this.paginator.pageIndex,
          ).pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          this.gridIsLoading = false;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.

          this.gridPageResultsLength = 100;
          return data;
        }),
      )
      .subscribe(data => (this.gridDataSource.data = data));
  }

}


