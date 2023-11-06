import { Injectable } from '@angular/core';
import { HeroOffset } from './hero-offset';
import { HEROOFFSET } from './mock-hero-offset';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroOffsetService {

  constructor() { }

  getOffsets(): Observable<HeroOffset[]> {
    const offsets = of(HEROOFFSET);
    return offsets;
  }

  // TODO
  // getOffset(): 

}

// import { Injectable } from '@angular/core';
// import { Player } from './player';
// import { PLAYERS } from './mock-players';
// import { Observable, of } from 'rxjs';
// import { MessageService } from './message.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class PlayerService {

//   constructor(
//     private messageService: MessageService
//   ) { }

//   getPlayers(): Observable<Player[]> {
//     const players = of(PLAYERS);
//     this.messageService.add(`PlayerService: fetched players`);
//     return players;
//   }

//   getPlayer(id: number): Observable<Player> {
//     const players = PLAYERS.find(p => p.id === id)!;
//     this.messageService.add(`PlayerService: fetched player id = ${id}`);
//     return of(players);
//   }

// }