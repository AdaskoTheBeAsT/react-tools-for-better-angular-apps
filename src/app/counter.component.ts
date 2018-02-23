import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { AppState, getCount } from './store';
import * as fromRoot from './store';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">inc</button>
    <button (click)="decrement()">dec</button>
    <p>Clicked {{ count$ | async }} times</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  constructor(private ngRedux: NgRedux<AppState>) {}
  count$ = this.ngRedux.select(getCount);

  increment() {
    this.ngRedux.dispatch(new fromRoot.IncAction());
  }
  decrement() {
    this.ngRedux.dispatch(new fromRoot.DecAction());
  }

  ngOnInit() {}
}
