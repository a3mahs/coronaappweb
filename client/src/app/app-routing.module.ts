import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CifrasComponent } from './components/cifras/cifras.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cifras',
    pathMatch: 'full'
  },
  {
    path: 'cifras',
    component: CifrasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
