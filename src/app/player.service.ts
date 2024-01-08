import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-players';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private messageService: MessageService
  ) { }

  getPlayers(): Observable<Player[]> {
    const players = of(PLAYERS);
    console.log(`PlayerService: fetched players...`);
    return players;
  }

  getPlayer(id: number): Observable<Player> {
    const players = PLAYERS.find(p => p.id === id)!;
    this.messageService.add(`PlayerService: fetched player id = ${id}`);
    return of(players);
  }

  playerOffset(name: string): number {
    let offset: number = 0;

    switch (name) {
      case "Adam":
        offset = 0;
        break;
      case "Cat":
        offset = 1;
        break;
      case "Eric":
        offset = 2;
        break;
      case "Greg":
        offset = 3;
        break;
      case "Kyle":
        offset = 4;
        break;
      case "Thomas":
        offset = 5;
        break;
      case "Anthony":
        offset = 6;
        break;
      case "Ben":
        offset = 7;
        break;
      case "OtherC":
        offset = 8;
        break;
      case "OtherD":
        offset = 9;
        break;
      default:
        console.log(`An error has occured...`);
    }

    return offset;
  }

}