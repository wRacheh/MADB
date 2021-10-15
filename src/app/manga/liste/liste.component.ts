import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MangaService } from 'src/app/service/manga.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  mangaList :any
  pagenumber=0

  constructor(private manga:MangaService, private router:Router) { }

  ngOnInit(): void {
    this.firstPage(0)
  }


  getDetails(id:any){
    this.router.navigate(['manga/details/',id])
  }
  

  getAllManga(){
    this.manga.getAllManga().subscribe(res=>{
      this.mangaList=res.data
      console.log(this.mangaList)
    })
  }

  nextPage(pagenumber:number){

    this.manga.getNextPageManga(pagenumber).subscribe(res=>{
      this.mangaList=res.data
      console.log("next ^page")
      console.log(this.mangaList)
      this.onScroll()
    })
  }
  onScroll() {
    window.scroll(0,0);
  }
  previousPage(pagenumber:number){
  
    this.manga.getNextPageManga(pagenumber).subscribe(res=>{
      this.mangaList=res.data
      console.log(this.mangaList)
      console.log(pagenumber)
      this.onScroll()
  
    })
  }
  
  firstPage(pagenumber:number){
  
    this.manga.getNextPageManga(pagenumber).subscribe(res=>{
      this.mangaList=res.data
      console.log(this.mangaList)
      this.onScroll()
  
    })
    
  }
  lastPage(pagenumber:number){
  
    this.manga.getNextPageManga(pagenumber).subscribe(res=>{
      this.mangaList=res.data
      console.log(this.mangaList)
      this.onScroll()
  
    })
  }
}
