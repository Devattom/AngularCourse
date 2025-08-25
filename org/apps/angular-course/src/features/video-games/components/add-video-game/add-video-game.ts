import {Component, viewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {VideoGame} from "../../models/video-games";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-add-video-game',
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-video-game.html',
  styleUrl: './add-video-game.css'
})
export class AddVideoGame {
  videoGame: VideoGame = {
    label: '',
    year: (new Date()).getFullYear(),
  }

  form = viewChild<NgForm>('addVideoGameForm')

  save(): void {
    console.info(this.form()?.form.valid)
    console.info(this.form()?.form.errors)
    console.info(this.videoGame);
  }
}
