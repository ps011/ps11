import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog/:name',
    component: BlogComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
