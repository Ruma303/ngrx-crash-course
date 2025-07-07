import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { addMessage, updateMessage } from '../../ngrx/store/message/message.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-message',
  imports: [FormsModule],
  template: `
    <h3>Message Component</h3>
    <textarea [(ngModel)]="userMessage"></textarea><br>
    <!-- <button (click)="dispatchAddMessage()">Add Message</button> -->
  `,
  styles: ``
})
export class MessageComponent {

  userMessage = signal('');

  constructor(private store: Store<{ messageSlice: string }>) {
    this.store.select((state) => state.messageSlice)
      .subscribe((message: string) => {
        this.userMessage.set(message);
      });
  }

  /* dispatchAddMessage() {
    if (this.userMessage().length > 0) {
      this.store.dispatch(addMessage(this.userMessage()));
    }
  } */
}
