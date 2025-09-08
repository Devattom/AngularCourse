import { Route } from '@angular/router';
import { NotFound } from '../shared/errors/not-found/not-found';
import { videoGamesRoute } from '../features/video-games/video-games.route';

export const appRoutes: Route[] = [
  { path: '', children: videoGamesRoute },
  { path: '**', component: NotFound },
];
