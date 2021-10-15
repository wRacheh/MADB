import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/model/anime';
import { AnimeService } from 'src/app/service/anime.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public myList:any
  public isCollapsed = true;

  constructor(private anime:AnimeService,private router:Router, private route:ActivatedRoute) { }
  pagenumber=0
  ngOnInit(): void {
    this.firstPage(0)
  }
  onScroll() {
    window.scroll(0,0);

}

getDetails(id:any){
  this.router.navigate(['details/',id])
}

  getList(){
    this.anime.getAnimeList().subscribe(res=>{
      this.myList=res.data
      console.log(this.myList)
    })
  }
nextPage(pagenumber:number){

  this.anime.getNextPageAnime(pagenumber).subscribe(res=>{
    this.myList=res.data
    console.log("next ^page")
    console.log(this.myList)
    this.onScroll()
  })
}
previousPage(pagenumber:number){

  this.anime.getNextPageAnime(pagenumber).subscribe(res=>{
    this.myList=res.data
    console.log("previous ^page")
    console.log(this.myList)
    console.log(pagenumber)
    this.onScroll()

  })
}

firstPage(pagenumber:number){

  this.anime.getNextPageAnime(pagenumber).subscribe(res=>{
    this.myList=res.data
    console.log("first ^page")
    console.log(this.myList)
    this.onScroll()

  })
  
}
lastPage(pagenumber:number){

  this.anime.getNextPageAnime(pagenumber).subscribe(res=>{
    this.myList=res.data
    console.log("last ^page")
    console.log(this.myList)
    this.onScroll()

  })
}
}
