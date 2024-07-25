import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorConsoleService implements ErrorService {
  handleError(error: Error): void {
    console.error('Console Error: ', error);
  }
}
