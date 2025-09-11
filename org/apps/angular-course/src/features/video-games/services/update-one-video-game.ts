import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { VideoGame } from '../models/video-games';

@Injectable({
  providedIn: 'root'
})
export class UpdateOneVideoGame {
  updateOne(item: VideoGame): Observable<VideoGame> {
    return of(item).pipe(
      delay(500)
    )
  }
}
