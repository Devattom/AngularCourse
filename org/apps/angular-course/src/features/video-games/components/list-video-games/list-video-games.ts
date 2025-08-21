import { Component } from '@angular/core';
import {VideoGames} from "../../models/video-games";

@Component({
  selector: 'app-list-video-games',
  imports: [],
  templateUrl: './list-video-games.html',
  styleUrl: './list-video-games.css'
})
export class ListVideoGames {
  list: VideoGames = [
    {label: 'The finals', year: 2017},
    {label: 'BF6', year: 2025},
  ];

  remove(): void {
    this.list.pop();
  }
}
