import {Component, OnDestroy, OnInit} from '@angular/core';
import {VideoGame, VideoGames} from "../../models/video-games";
import {TableVideoGames} from "../table-video-games/table-video-games";
import {AddVideoGame} from "../add-video-game/add-video-game";
import {FilterVideoGames} from "../filter-video-games/filter-video-games";

@Component({
  selector: 'app-list-video-games',
  imports: [TableVideoGames, AddVideoGame, FilterVideoGames],
  templateUrl: './list-video-games.html',
  styleUrl: './list-video-games.css'
})
export class ListVideoGames implements OnInit, OnDestroy{
  list: VideoGames = [
    {id: 1, label: 'The finals', year: 2017},
    {id: 2, label: 'BF6', year: 2025},
  ];

  titre = 'Le super tableau des jeux vidéos';

  remove(item: VideoGame): void {
    const index = this.list.findIndex(video => video.label === item.label);

    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  ngOnInit(): void {
    console.info('ListVideoGames initialized');
  }
  ngOnDestroy() {
    console.info('ListVideoGames destroyed');
  }
}
