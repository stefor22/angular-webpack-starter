import { NgModule, ModuleWithProviders } from '@angular/core';

import {ContactUsComponent} from './contact-us/contact-us.component';

const MODULES = [
]
const PIPES = [
]
const COMPONENTS = [
  ContactUsComponent,
]
const PROVIDERS = [
]

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
