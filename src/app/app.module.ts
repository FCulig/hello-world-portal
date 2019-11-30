import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  NgbModule,
  NgbDropdownModule,
  NgbDropdown
} from "@ng-bootstrap/ng-bootstrap";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatTableModule, MatButtonModule, MatSelectModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AuthenticationPageComponent } from "./pages/authentication-page/authentication-page.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { AdminPanelPageComponent } from "./pages/admin-panel-page/admin-panel-page.component";
import { ArticleEditorPageComponent } from "./pages/article-editor-page/article-editor-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Interceptor } from './services/authinterceptor';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomePageComponent,
    AuthenticationPageComponent,
    FooterComponent,
    ProfilePageComponent,
    AdminPanelPageComponent,
    ArticleEditorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FontAwesomeModule,
    NgbModule,
    NgbDropdownModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  exports: [],
  providers: [
    NgbDropdown,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
