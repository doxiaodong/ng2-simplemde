import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core'

@Component({
  selector: 'lazy',
  encapsulation: ViewEncapsulation.None,
  template: require('./index.html')
})
export class Lazy implements OnInit {

  value = '11111'

  ngOnInit() { }
}
