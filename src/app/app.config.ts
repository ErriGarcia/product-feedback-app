import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEnrica } from './app.provider';
import { mockApiServices } from './mock-api-data';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), 
    provideEnrica({mockApi: {
      delay: 0,
      services: mockApiServices
    }
  }
  )
]
};
