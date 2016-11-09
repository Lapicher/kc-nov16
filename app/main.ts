// En el documento 'main.ts' hacemos la instanciación e iniciación del
// módulo principal de nuestra app. Podríamos hacer este bootstrapping
// para web, native mobile o native desktop; en este caso, como es para
// web, nos apoyamos en la función 'platformBrowserDynamic'. 

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
