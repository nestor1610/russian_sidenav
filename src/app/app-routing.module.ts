import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


const routes = [
  {
    path: '',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./modules/main-layout/main-layout.module').then(m => m.MainLayoutModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
