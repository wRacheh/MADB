import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http:HttpClient) { }

  animeurl=environment.animeUrl;



  public getAnimeList():Observable<any>{
    return this.http.get(this.animeurl)
  }

  public getAnimeById(id:any):Observable<any>{
    return this.http.get(`${this.animeurl}/${id}`)
  }

  public getFirstPageAnime(offset:number):Observable<any>{
    return this.http.get(this.animeurl+"?page[limit]=18/&page[offset]="+offset)
  }

  public getNextPageAnime( offset:number):Observable<any>{
    return this.http.get(this.animeurl+"?page[limit]=18&page[offset]="+offset)
  }


}
