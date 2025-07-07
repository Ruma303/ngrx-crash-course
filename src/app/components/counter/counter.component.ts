import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { increment, decrement, reset } from '../../ngrx/store/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="counter">
      <h1>Counter</h1>
      <h2>{{ counter$ | async }}</h2>
      <button (click)="dispatchDecrement()">-</button>
      <button (click)="dispatchIncrement()">+</button>
      <button (click)="dispatchReset()">Reset</button>
    </div>
  `,
  styles: [``]
})
export class CounterComponent {

  counter$: Observable<number>;

  constructor(private store: Store<{ myCounter: number }>) {
    this.counter$ = this.store.select('myCounter');
  }

  dispatchIncrement() {
    this.store.dispatch(increment());
  }

  dispatchDecrement() {
    this.store.dispatch(decrement());
  }

  dispatchReset() {
    this.store.dispatch(reset());
  }
}
