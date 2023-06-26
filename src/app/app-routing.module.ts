import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'reactive',
    loadChildren: () => import('./reactive/reactive.module').then(t => t.ReactiveModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(t => t.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'reactive',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
