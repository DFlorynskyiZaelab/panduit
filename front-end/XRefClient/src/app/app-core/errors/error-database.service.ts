import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root',
})
export class ErrorDatabaseService implements ErrorService {
  handleError(error: Error): void {
    // logic to log error to database, ащк учфьзду 
    console.log('Database Error: ', error);
  }
}