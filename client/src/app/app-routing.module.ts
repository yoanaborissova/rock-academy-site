import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/shared/home-page/home-page.component';
import { AboutComponent } from './components/shared/about/about.component';
import { AnonymousGuard } from './core/guards/anonymous.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'auth', loadChildren: './components/authentication/authentication.module#AuthenticationModule', canLoad: [AnonymousGuard] },
  { path: 'bands',  loadChildren: './components/bands/bands.module#BandsModule' },
  { path: 'articles',  loadChildren: './components/articles/articles.module#ArticlesModule' },
  { path: 'applications',  loadChildren: './components/applications/applications.module#ApplicationsModule' },
  { path: 'profile', loadChildren: './components/profile/profile.module#ProfileModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
