import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';

import {enableProdMode} from '@angular/core';

enableProdMode(); // This line is only if you are going into the production mode

platformBrowserDynamic().bootstrapModule(AppModule);
