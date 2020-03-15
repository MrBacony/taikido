import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'training', component: HomeComponent},
  {path: 'probetraining', component: HomeComponent},
  {path: 'links', component: HomeComponent},
  {path: 'blog', component: HomeComponent},
  {path: 'kontakt', component: HomeComponent},
  {path: '*', redirectTo: 'home'},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
