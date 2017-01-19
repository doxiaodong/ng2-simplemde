[![Build Status](https://img.shields.io/travis/doxiaodong/ng2-simplemde.svg?style=flat-square)](https://travis-ci.org/doxiaodong/ng2-simplemde)
[![Downloads](https://img.shields.io/npm/dt/ng2-simplemde.svg?style=flat-square)](https://www.npmjs.com/package/ng2-simplemde)
[![Versions](https://img.shields.io/npm/v/ng2-simplemde.svg?style=flat-square)]()
[![License](https://img.shields.io/npm/l/ng2-simplemde.svg?style=flat-square)]()

# simplemde-markdown-editor with Angular

# demo
  [https://doxiaodong.github.io/ng2-simplemde](https://doxiaodong.github.io/ng2-simplemde)

# Usage

* install `npm i ng2-simplemde --save`

```typescript
import { NgModule } from '@angular/core'
import { SimplemdeModule } from 'ng2-simplemde'
@NgModule({
  imports: [
    SimplemdeModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```html
<simplemde [(ngModel)]="value"></simplemde>
```
