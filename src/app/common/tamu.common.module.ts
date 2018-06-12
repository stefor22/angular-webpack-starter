import { NgModule, ModuleWithProviders } from '@angular/core';

import {ContactUsComponent} from './contact-us/contact-us.component';
import {ScenePipe} from '../pipe/scenePipe';

const MODULES = [
];
const PIPES = [
  ScenePipe,
];
const COMPONENTS = [
  ContactUsComponent,
];
const PROVIDERS = [
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    ...COMPONENTS
  ]
})
export class MyCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyCommonModule,
      providers: [
        ...PROVIDERS
      ]
    };
  }
}
