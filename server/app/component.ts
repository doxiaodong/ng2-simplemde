import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core'

@Component({
  selector: 'simplemde-app',
  encapsulation: ViewEncapsulation.None,
  template: require('./index.html')
})
export class AppComponent implements OnInit {

  ngOnInit() { }
}
