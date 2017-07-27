import { NgModule } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
// import { SimplemdeModule, SIMPLEMDE_CONFIG } from '../../src'

import { ShareModule } from '../share'
import { AppComponent } from './component'

import {
  ROUTES,
  RouteDeclarations
} from './route'

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    ...RouteDeclarations
  ],
  imports: [
    BrowserModule,
    ShareModule.forRoot(),
    // SimplemdeModule.forRoot({
    //   provide: SIMPLEMDE_CONFIG,
    //   useValue: {
    //     placeholder: 'placeholder'
    //   }
    // }),

    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppModule { }
