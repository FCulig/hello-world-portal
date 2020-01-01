import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AuthenticationPageComponent } from "./pages/authentication-page/authentication-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { ArticleEditorPageComponent } from "./pages/article-editor-page/article-editor-page.component";
import { AdminPanelPageComponent } from "./pages/admin-panel-page/admin-panel-page.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { ArticleComponent } from "./pages/article/article.component";
import { ArticleListComponent } from "./pages/article-list/article-list.component";
import { Role } from "./entities/roles";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "authenticate", component: AuthenticationPageComponent },
  { path: "profile/:id", component: ProfilePageComponent },
  { path: "category/:id", component: ArticleListComponent },
  { path: "article/:id", component: ArticleComponent },
  {
    path: "editor",
    component: ArticleEditorPageComponent,
    canActivate: [AuthGuardService],
    data: { roles: [Role.Writer, Role.Admin] }
  },
  {
    path: "administration",
    component: AdminPanelPageComponent,
    canActivate: [AuthGuardService],
    data: { roles: [Role.Admin] }
  },
  { path: "**", component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
