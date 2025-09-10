import { Route } from "@angular/router";
import { ListStats } from "./components/list-stats/list-stats";
import { isAdminGuard } from "./guard/is-admin-guard";

export const statisticsRoutes: Route[] = [
    {
        path: '',
        component: ListStats,
        canActivate: [isAdminGuard]
    }
]