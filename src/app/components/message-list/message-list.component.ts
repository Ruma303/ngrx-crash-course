import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadMessages } from '../../ngrx/store/message/message.actions';
import { MessageState } from '../../ngrx/store/message/message.reducers';
import { Message } from '../../services/message.service';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [AsyncPipe, NgForOf],
  template: `
    <h3>Elenco Messaggi</h3>
    <button (click)="fetchMessages()">Carica Messaggi</button>
    <ul>
      <li *ngFor="let msg of (messages$ | async)">
        {{ msg.content }}
      </li>
    </ul>
  `,
  styles: ``
})
export class MessageListComponent {

  messages$: Observable<Message[]>;

  constructor(private store: Store<{ messageSlice: MessageState }>) {
    this.messages$ = this.store.select(state => state.messageSlice.messages);
  }

  fetchMessages() {
    this.store.dispatch(loadMessages());
  }
}
