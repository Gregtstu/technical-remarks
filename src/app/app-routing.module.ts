import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./pages/main-layout/main-layout.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {FavoritePageComponent} from "./pages/favorite-page/favorite-page.component";
import {CreatePageComponent} from "./pages/create-page/create-page.component";
import {EditPageComponent} from "./pages/edit-page/edit-page.component";

const routes: Routes = [
  {
    path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'/', pathMatch:'full'},
      {path:'', component:MainPageComponent},
      {path:'favorite', component:FavoritePageComponent},
      {path:'create', component:CreatePageComponent},
      {path:'post/:id', component:PostPageComponent},
      {path:'edit/:id', component:EditPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
