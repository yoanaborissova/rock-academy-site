import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from './core/guards/auth.guard';
import { HomePageComponent } from './components/shared/home-page/home-page.component';
import { AboutComponent } from './components/shared/about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'auth', loadChildren: './components/authentication/authentication.module#AuthenticationModule' },
  { path: 'posts',  loadChildren: './components/posts/posts.module#PostsModule' },
  { path: 'bands',  loadChildren: './components/bands/bands.module#BandsModule' },
  { path: 'articles',  loadChildren: './components/articles/articles.module#ArticlesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }