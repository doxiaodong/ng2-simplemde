import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ShareModule } from '../share'
import { SimplemdeModule, SIMPLEMDE_CONFIG } from '../../src'
import { AppComponent } from './app.component'

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: {
        placeholder: 'placeholder'
      }
    })
  ]
})
export class AppModule {

}
