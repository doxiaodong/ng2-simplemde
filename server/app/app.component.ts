import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core'
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'simplemde-app',
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})
export class AppComponent implements OnInit {
  form: FormGroup

  value = '11111'

  constructor(
    fb: FormBuilder
  ) {

    this.form = fb.group({
      key: [
        '',
        Validators.required
      ]
    })
  }

  ngOnInit() { }
}
