import { ApplicationConfig, provideZoneChangeDetection, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';

// app
import { routes } from './app.routes';
import { environment } from '../environments/environment';

// error services
import { ErrorService } from './app-core/errors/error.service';
import { ErrorConsoleService } from './app-core/errors/error-console.service';
import { ErrorDatabaseService } from './app-core/errors/error-database.service';
import { GlobalErrorHandler } from './app-core/errors/global-error.handler';


export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ErrorService, useClass: environment.production ? ErrorDatabaseService : ErrorConsoleService },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)]
};
