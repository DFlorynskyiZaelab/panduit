import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorService: ErrorService) {}

  handleError(error: Error): void {
    this.errorService.handleError(error);
  }
}