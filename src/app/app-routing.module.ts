import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ArticleEditorPageComponent } from './pages/article-editor-page/article-editor-page.component';
import { AdminPanelPageComponent } from './pages/admin-panel-page/admin-panel-page.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { ArticleComponent } from './pages/article/article.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'authenticate', component: AuthenticationPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'category/:id', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'editor', component: ArticleEditorPageComponent, canActivate: [AuthGuardService] },
  { path: 'administration', component: AdminPanelPageComponent, canActivate: [AuthGuardService] }, //dodaj role guard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
