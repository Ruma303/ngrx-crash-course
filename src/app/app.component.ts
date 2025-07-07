import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { Counter2Component } from "./components/counter2/counter2.component";
import { Counter3Component } from "./components/counter3/counter3.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, Counter2Component, Counter3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-crash-course';
}
