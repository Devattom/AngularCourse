import {inject, Injectable} from '@angular/core';
import {Person} from "../models/Person";
import {map, Observable} from "rxjs";
import {GetAllPeople} from "./get-all-people";

@Injectable({
  providedIn: 'root'
})
export class GetAllPersonApplicatif {
  private readonly infra = inject(GetAllPeople);
  getAll(): Observable<Person[]> {
    return this.infra.getAll().pipe(
      map(
        result => result.results.map(
          person => ({id: +person.uid, surname: person.name })
        )
      )
    )
  }
}
