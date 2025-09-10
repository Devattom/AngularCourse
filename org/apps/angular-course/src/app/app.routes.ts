import { Route } from '@angular/router';
import { NotFound } from '../shared/errors/not-found/not-found';
import { videoGamesRoute } from '../features/video-games/video-games.route';
import { StatisticsResolver } from '../features/statistics/resolver/statistics.resolver';
import { LoginRoutes } from '../features/auth/auth.route';
import { isAuthenticatedGuard } from '../features/auth/guard/is-authenticated-guard';

export const appRoutes: Route[] = [
  { 
    path: 'video-games', 
    children: videoGamesRoute,
    title: 'Liste des jeux vidéo',
    canActivate: [isAuthenticatedGuard]
  },
  {
    path: 'stats', 
    loadChildren: () => import('../features/statistics/statistics.routes').then(route => route.statisticsRoutes),
    data: {
      title: 'Mes stats de jeux'
    },
    resolve: {
      stats: StatisticsResolver
    }
  },
  {
    path: 'login',
    children: LoginRoutes 
  },
  { 
    path: '**', component: NotFound 
  },
];
