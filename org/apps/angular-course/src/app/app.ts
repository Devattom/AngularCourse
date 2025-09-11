import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {RouterOutlet} from "@angular/router";
import {MainMenu} from "../shared/menu/main-menu/main-menu";
import { ComputePipe } from '../shared/tools/compute-pipe';
import { AutoFocus } from '../shared/tools/auto-focus';

@Component({
  imports: [RouterOutlet, MatSliderModule, MainMenu, ComputePipe, AutoFocus],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-course';
  protected value = 5;
}
