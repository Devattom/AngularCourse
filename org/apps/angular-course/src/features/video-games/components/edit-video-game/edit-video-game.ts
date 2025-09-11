import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateOneVideoGame } from '../../services/update-one-video-game';
import { VideoGame } from '../../models/video-games';
import { GetOneVideoGame } from '../../services/get-one-video-game';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-video-game',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-video-game.html',
  styleUrl: './edit-video-game.css'
})
export class EditVideoGame implements OnInit{
  private readonly formBuilder = inject(FormBuilder);
  private readonly updateService = inject(UpdateOneVideoGame);
  private readonly getOneService = inject(GetOneVideoGame);

  protected readonly videoGameFormGroup = this.formBuilder.nonNullable.group({
    label: [
      '', 
      [
        Validators.minLength(3),
        Validators.required
      ]
    ],
    year: [
      new Date().getFullYear(), 
      [
        Validators.max(new Date().getFullYear()),
        Validators.required
      ]
    ]
  })

  private readonly route = inject(ActivatedRoute);

  routeParams = toSignal(this.route.params);

  ngOnInit(): void {
    this.route.params
    .pipe(
      map(params => params['id']),
      switchMap(id => this.getOneService.getOne(id))
    )
    .subscribe({
      next: item => {
        this.videoGameFormGroup.patchValue(item)
      }
    })
  }

  saveOne(): void {
    let label = this.videoGameFormGroup.value.label;
    let year = this.videoGameFormGroup.value.year;

    if (label === undefined || year === undefined) {
      return;
    }

    const videoGame: VideoGame = {
      label: label,
      year: year
    }

    this.updateService.updateOne(videoGame).subscribe();
  }
}
