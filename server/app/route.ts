import { Routes } from '@angular/router'

import { Normal } from '../normal'

export const ROUTES: Routes = [
  { path: '', component: Normal },

  { path: 'lazy', loadChildren: '../lazy/index#LazyModule' }
]

export const RouteDeclarations = [
  Normal
]
