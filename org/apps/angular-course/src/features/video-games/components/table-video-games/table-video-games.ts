import {Component, inject, input, output} from '@angular/core';
import {VideoGame, VideoGames} from "../../models/video-games";
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-video-games',
  imports: [],
  templateUrl: './table-video-games.html',
  styleUrl: './table-video-games.css'
})
export class TableVideoGames {
  private readonly router = inject(Router);
  items = input.required<VideoGames>();
  tableTitre = input.required<string>();

  elementRemoved = output<VideoGame>()
  removeLine(item: VideoGame): void {
    this.elementRemoved.emit(item);
  }

  edit(item: VideoGame): void {
    this.router.navigate(['video-games', item.id]);
  }
}
