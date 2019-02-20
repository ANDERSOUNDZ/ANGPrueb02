import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiHomeComponent } from './api-home/api-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'api-home',
    pathMatch: 'full'
  },
  {
    path: 'api-home',
    component: ApiHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
