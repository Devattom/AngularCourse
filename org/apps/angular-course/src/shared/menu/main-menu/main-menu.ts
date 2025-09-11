import { Component, inject } from '@angular/core';
import {Router} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-main-menu',
  imports: [ MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css'
})
export class MainMenu {
  private readonly router = inject(Router);
  goToUrl(url:string): void {
    this.router.navigate([url])
  }
}
