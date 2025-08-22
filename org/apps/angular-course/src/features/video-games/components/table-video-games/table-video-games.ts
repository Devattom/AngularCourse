import {Component, input, output} from '@angular/core';
import {VideoGame, VideoGames} from "../../models/video-games";

@Component({
  selector: 'app-table-video-games',
  imports: [],
  templateUrl: './table-video-games.html',
  styleUrl: './table-video-games.css'
})
export class TableVideoGames {
  items = input.required<VideoGames>();
  tableTitre = input.required<string>();

  elementRemoved = output<VideoGame>()
  removeLine(item: VideoGame): void {
    this.elementRemoved.emit(item);
  }
}
