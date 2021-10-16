import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './anime/list/list.component';
import { HomeComponent } from './home/home.component';
import { AnimeDetailsComponent } from './manga/anime-details/anime-details.component';
import { ListeComponent } from './manga/liste/liste.component';
import { MangaDetailsComponent } from './manga/manga-details/manga-details.component';

const routes: Routes = [

  {path:"anime/liste",component:ListComponent},
  {path:"manga/liste",component:ListeComponent},
  {path:"details/:id",component:AnimeDetailsComponent},
  {path:"manga/details/:id",component:MangaDetailsComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
