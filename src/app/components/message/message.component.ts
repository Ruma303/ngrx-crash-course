import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addMessage } from '../../ngrx/store/message/message.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Message Component</h3>
    <textarea [(ngModel)]="userMessage"></textarea><br>
    <button (click)="dispatchAddMessage()">Add Message</button>
  `,
  styles: ``
})
export class MessageComponent {

  userMessage = '';

  constructor(private store: Store<{ messageSlice: string }>) {
    this.store.select(state => state.messageSlice)
      .subscribe((message: string) => {
        this.userMessage = message;
      });
  }

  dispatchAddMessage() {
    this.store.dispatch(addMessage({ message: this.userMessage }));
  }
}
