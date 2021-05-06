import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'noticias',
    loadChildren:() => import('./modules/noticias/noticias.module').then(m => m.NoticiasModule)
  },
  {
    path:'registro',
    loadChildren:() => import('./modules/registro/registro.module').then(m => m.RegistroModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
