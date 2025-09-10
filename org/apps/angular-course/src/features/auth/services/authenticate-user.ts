import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';
import { LoggedUser } from '../models/logged.user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUser {
  private readonly userStore = new BehaviorSubject<LoggedUser|undefined>(undefined);

  logIn(): Observable<LoggedUser> {
    const user: LoggedUser = {
      login: 'toto',
      firstname: 'John',
      lastname: 'Doe',
      token: '123456'
    }

    return of(user).pipe(
      delay(1000),
      tap(user => this.userStore.next(user))
    );
  }

  get isAuthenticated(): boolean{
    return this.userStore.value !== undefined;
  }

  get asObservable(): Observable<LoggedUser | undefined> {
    return this.userStore.asObservable();
  }
}
