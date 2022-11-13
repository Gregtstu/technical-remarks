import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CreatePageComponent,
    EditPageComponent,
    FavoritePageComponent,
    AllPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
