import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-name-template',
  templateUrl: './song-name-template.component.html',
  styleUrls: ['./song-name-template.component.scss']
})
export class SongNameTemplateComponent implements OnInit {

  @Input() data!: {
    songName: string,
    songImage: string,
    songSingers: string[]
  };
 
  @Input() bigImageState: boolean = false;

  ngOnInit(): void {
  }
  
}
