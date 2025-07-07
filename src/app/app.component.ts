import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { MessageComponent } from './components/message/message.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild('output', { static: true }) output: ElementRef | '' = '';

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
          if (this.output instanceof ElementRef) {
            this.output.nativeElement.textContent = message;
          }
        });
    }
  }
}
