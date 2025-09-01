import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {GetAllPersonApplicatif} from "../../services/get-all-person.applicatif";
import {Subscription, tap} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-filter-video-games',
  imports: [],
  templateUrl: './filter-video-games.html',
  styleUrl: './filter-video-games.css'
})
export class FilterVideoGames implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();
  private readonly peopleService = inject(GetAllPersonApplicatif)
  people$ = this.peopleService.getAll();
  signalPeople = toSignal(this.people$);

  ngOnInit(): void {
    const currentSubscription = this.people$.subscribe({
      next: items => {
        console.log(items);
      }
    })
    this.subscription.add(currentSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
