import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from './transloco-loader';

export const appConfig: ApplicationConfig = {
providers: [provideRouter(routes), provideAnimations(), provideToastr({
  timeOut: 3000,
  positionClass: 'toast-top-right',
  preventDuplicates: true
}), provideHttpClient(), provideTransloco({
        config: { 
          availableLangs: ['en', 'es'],
          defaultLang: 'en',
          //fallbackLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      })],
};
