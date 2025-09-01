import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {ListVideoGames} from "../features/video-games/components/list-video-games/list-video-games";

@Component({
  imports: [ListVideoGames, MatSliderModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-course';
}
