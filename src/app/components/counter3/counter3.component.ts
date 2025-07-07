import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter3',
  imports: [],
  template: `
    <h1>Counter3</h1>
    <h2 #counter3>test</h2>
  `,
  styles: ``
})
export class Counter3Component {

  @ViewChild('counter3') counter3!: ElementRef;

  constructor(private store: Store<{ myCounter: number }>) {
    this.store.select((state) => state.myCounter).subscribe((state) => {
      this.counter3.nativeElement.innerText = `Test Component - Counter: ${state}`;
    });
  }
}
