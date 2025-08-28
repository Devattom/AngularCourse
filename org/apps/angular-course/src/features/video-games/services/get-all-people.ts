import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {PeopleApiResult} from "./models";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetAllPeople {
  private readonly http = inject(HttpClient);

  getAll(): Observable<PeopleApiResult> {
    return this.http.get<PeopleApiResult>(environment.apis.person.url).pipe(
      tap(item => console.log(item)),
    );
  }
}
