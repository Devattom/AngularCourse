import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-video-game',
  imports: [],
  templateUrl: './edit-video-game.html',
  styleUrl: './edit-video-game.css'
})
export class EditVideoGame implements OnInit{
  private readonly route = inject(ActivatedRoute);
  routeParams = toSignal(this.route.params);

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => {
        console.info(param['id'])
      }
    })
  }
}
