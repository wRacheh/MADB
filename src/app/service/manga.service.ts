import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  mangaUrl=environment.mangaUrl;

  constructor(private http:HttpClient) { }



  getAllManga():Observable<any>
  {
    return this.http.get(this.mangaUrl)
  }
  getMangaId(id:any):Observable<any>
  {
    return this.http.get(`${this.mangaUrl}/${id}`)
  }

  public getFirstPageManga(offset:number):Observable<any>{
    return this.http.get(this.mangaUrl+"?page[limit]=18/&page[offset]="+offset)
  }

  public getNextPageManga( offset:number):Observable<any>{
    return this.http.get(this.mangaUrl+"?page[limit]=18&page[offset]="+offset)
  }
  public getFirstPageMonga(offset:number):Observable<any>{
    return this.http.get(this.mangaUrl+"?page[limit]=18/&page[offset]="+offset)
  }
}
