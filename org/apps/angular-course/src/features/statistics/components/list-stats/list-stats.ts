import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { StatList } from '../../models/statistics';

@Component({
  selector: 'app-list-stats',
  imports: [AsyncPipe],
  templateUrl: './list-stats.html',
  styleUrl: './list-stats.css'
})
export class ListStats {
  private readonly route = inject(ActivatedRoute);
  protected readonly stats$ = this.route.data.pipe(
    map<{[key: string | symbol]: any}, StatList>(data => data['stats'])
  );
  protected readonly title$ = this.route.data.pipe(
    map<{[key: string | symbol]: any}, string>(data => data['title'])
  );
}
