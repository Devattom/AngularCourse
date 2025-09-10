import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from "@angular/router";
import { StatList } from "../models/statistics";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StatisticsResolver implements Resolve<StatList> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<StatList | RedirectCommand> {
        const fakeData: StatList = [
            {
                year: 2023,
                nbSuccess: 100,
                nbFailures: 100
            },
            {
                year: 2024,
                nbSuccess: 150,
                nbFailures: 50
            }
        ]

        return of(fakeData);
    }
}