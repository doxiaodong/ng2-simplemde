import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ShareModule } from '../share'
import { SimplemdeModule, SIMPLEMDE_CONFIG } from '../../src'
import { Lazy } from './component'

const ROUTER_CONFIG = [
  { path: '', component: Lazy }
]

@NgModule({
  declarations: [
    Lazy
  ],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG),
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: {
        placeholder: 'placeholder'
      }
    })
  ]
})
export class LazyModule {

}
