import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { SimplemdeModule } from '../../src'

@NgModule({
  imports: [
    CommonModule,
    SimplemdeModule
  ],
  exports: [
    CommonModule,
    SimplemdeModule
  ]
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule
    }
  }
}
