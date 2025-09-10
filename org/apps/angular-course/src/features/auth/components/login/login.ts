import { Component, inject } from '@angular/core';
import { LoggedUser } from '../../models/logged.user';
import { FormsModule } from '@angular/forms';
import { AuthenticateUser } from '../../services/authenticate-user';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private readonly authService = inject(AuthenticateUser);
  private readonly router = inject(Router);
  isAuth = false;
  login = '';
  password = '';

  doLogin(): void {
    this.authService.logIn()
    .pipe(
      tap(item => this.router.navigate(['video-games']))
    )
    .subscribe();
  }
}
