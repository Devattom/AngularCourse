import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import {ListVideoGames} from "../features/video-games/components/list-video-games/list-video-games";

@Component({
  imports: [ListVideoGames],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-course';
}
