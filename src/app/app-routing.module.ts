import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { AboutComponent } from './about/about.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: "",
    component: SearchPageComponent
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
