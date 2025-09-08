import { Route } from '@angular/router';
import { ListVideoGames } from './components/list-video-games/list-video-games';
import { EditVideoGame } from './components/edit-video-game/edit-video-game';


export const videoGamesRoute: Route[] = [
  { path: 'video-games', component: ListVideoGames },
  { path: 'video-games/:id', component: EditVideoGame},
];