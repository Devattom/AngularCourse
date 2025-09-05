import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {RouterOutlet} from "@angular/router";
import {MainMenu} from "../shared/menu/main-menu/main-menu";

@Component({
  imports: [RouterOutlet, MatSliderModule, MainMenu],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-course';
}
