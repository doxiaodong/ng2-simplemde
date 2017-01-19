import { ControlValueAccessor } from '@angular/forms'

export class NgModelBase implements ControlValueAccessor {
  public onTouchedCallback: () => {}
  public onChangeCallback: (_: any) => {}
  public _innerValue: any

  set value(v: any) {
    if (v !== this._innerValue) {
      this._innerValue = v
      this.onChangeCallback(v)
    }
  }

  get value(): any {
    return this._innerValue
  }

  writeValue(v: any) {
    if (v !== this._innerValue) {
      this._innerValue = v
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn
  }
}
