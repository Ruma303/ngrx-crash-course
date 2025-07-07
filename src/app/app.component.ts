import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageComponent],
  template: `
    <section>
    <div class="container">
      <app-message></app-message>
      <p>Message from ngrx: <span #output></span></p>
    </div>
    <router-outlet></router-outlet>
  </section>
  `,
  styles: `
    .container {
      padding: 1em 3em;
      display: flex;
      flex-direction: row;
      gap: 4em;
    }
  `
})
export class AppComponent {

  @ViewChild('output', { static: true }) output?: ElementRef;

  constructor(private store: Store<{ messageSlice: string }>) {
    this.store.select(state => state.messageSlice)
      .subscribe(message => {
        console.log('Current message:', message);
      });
  }

  ngAfterViewInit() {
    if (this.output) {
      this.store.select(state => state.messageSlice)
        .subscribe(message => {
          this.output!.nativeElement.textContent = message;
        });
    }
  }
}
