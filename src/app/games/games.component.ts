import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (game of games ; track game.id) {
        <li (click)="fav(game.name)">{{game.name}}</li>      
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {

  @Input() username='';

  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(_gameName: string){

    this.addFavoriteEvent.emit(_gameName);
  }


  games = [
    {
      id: 1,
      name: 'Game 1'
    },
    {
      id: 2,
      name: 'Game 2'
    },
    {
      id: 3,
      name: 'Game 3'
    }
  ]
}
