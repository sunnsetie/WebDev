import { Component } from '@angular/core';
import {ICard} from "./data/cards";
import {cards as data} from "./data/cards";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

  cards: ICard[] = data
}
