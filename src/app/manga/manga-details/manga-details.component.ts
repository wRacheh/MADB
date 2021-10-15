import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AnimeService } from 'src/app/service/anime.service';
import { MangaService } from 'src/app/service/manga.service';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss']
})
export class MangaDetailsComponent implements OnInit {
  id: String = ''
  mangadetails :any;
  constructor(private route: ActivatedRoute,private router: Router,private manga:MangaService,config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

   }

   ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.manga.getMangaId(this.id).subscribe(res=>{
      this.mangadetails=res.data;
      console.log(this.mangadetails)


    })
    
  }

}
