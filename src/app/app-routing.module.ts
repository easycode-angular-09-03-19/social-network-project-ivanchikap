import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./common/guards/auth.guard";

const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule', data: { withoutHeader: true } },
  { path: 'users/:id', loadChildren: './modules/user/user.module#UserModule'},
  { path: 'news', loadChildren: './modules/news/news.module#NewsModule'},
  { path: 'winners', loadChildren: './modules/winners/winners.module#WinnersModule'},
  { path: '', loadChildren: './modules/home/home.module#HomeModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
