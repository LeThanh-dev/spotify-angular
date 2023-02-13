import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  {
    path: '',
    title: "Spotify",
    loadChildren: () => import("./layout/default-layout/default-layout.module").then(m => m.DefaultLayoutModule)
  },
  
  {
    path: '**',
    title: "Không tìm thấy trang",
    component: NotFoundPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }