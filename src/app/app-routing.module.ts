import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EnterDataPage } from './enter-data/enter-data.page';
import { HomePage } from './home/home.page';
import { PracticePage } from './practice/practice.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'enter-data',
    component: EnterDataPage
  },
  {
    path: 'practice',
    component: PracticePage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
