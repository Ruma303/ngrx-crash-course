import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { Store } from '@ngrx/store';
import { MessageState } from './ngrx/store/message/message.reducers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageComponent, MessageListComponent],
  template: `
    <section>
    <div class="container">
      <app-message></app-message>
      <p>Message from ngrx: <span #output></span></p>
    </div>
    <div class="list">
      <app-message-list></app-message-list>
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

  constructor(private store: Store<{ messageSlice: MessageState }>) {
    this.store.select(state => state.messageSlice.messages)
      .subscribe(messages => {
        console.log('Lista messaggi:', messages);
      });
  }


  ngAfterViewInit() {
    if (this.output) {
      this.store.select(state => state.messageSlice.messages)
        .subscribe(messages => {
          const content = messages.map(m => m.content).join(', ');
          this.output!.nativeElement.textContent = content;
        });
    }
  }

}