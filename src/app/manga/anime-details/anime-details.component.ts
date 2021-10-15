import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AnimeService } from 'src/app/service/anime.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {
  id: String = ''
  animeDetails :any;
  safeSrc: SafeResourceUrl | undefined;
yturl:any
  constructor(private sanitizer: DomSanitizer,private route: ActivatedRoute,private router: Router,private anime:AnimeService,config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.anime.getAnimeById(this.id).subscribe(res=>{
      this.animeDetails=res.data;
      console.log(this.animeDetails)
      this.yturl="https://www.youtube.com/watch?v=/"+this.animeDetails.attributes.youtubeVideoId
      console.log(this.yturl)

    })
    
  }
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
