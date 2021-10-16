import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListComponent } from './anime/list/list.component';
import { ListeComponent } from './manga/liste/liste.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimeDetailsComponent } from './manga/anime-details/anime-details.component';
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { MangaDetailsComponent } from './manga/manga-details/manga-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListComponent,
    ListeComponent,
    AnimeDetailsComponent,
    MangaDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
