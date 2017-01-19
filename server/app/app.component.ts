import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core'

@Component({
  selector: 'simplemde-app',
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})
export class AppComponent implements OnInit {

  value = '11111'

  ngOnInit() { }
}
