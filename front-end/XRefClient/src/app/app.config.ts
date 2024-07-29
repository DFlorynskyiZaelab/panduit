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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// http services
import { HttpUploadService } from './app-core/services/http-upload.service';
import { HttpUploadMockService } from './app-core/services/http-upload.service.mock';

export const appConfig: ApplicationConfig = {
  providers: [
    // error handling
    { provide: ErrorService, useClass: environment.production ? ErrorDatabaseService : ErrorConsoleService },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    // http service
    { provide: HttpUploadService, useClass: HttpUploadMockService },
    // common
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync('animations')]
};
