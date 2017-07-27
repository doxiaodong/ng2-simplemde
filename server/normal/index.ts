import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core'

@Component({
  selector: 'normal',
  encapsulation: ViewEncapsulation.None,
  template: require('./index.html')
})
export class Normal implements OnInit {

  ngOnInit() { }
}
