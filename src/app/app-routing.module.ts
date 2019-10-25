import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ArticleEditorPageComponent } from './pages/article-editor-page/article-editor-page.component';
import { AdminPanelPageComponent } from './pages/admin-panel-page/admin-panel-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'authenticate', component: AuthenticationPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'editor', component: ArticleEditorPageComponent },
  { path: 'administration', component: AdminPanelPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
