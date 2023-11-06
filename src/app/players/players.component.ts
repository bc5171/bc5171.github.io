import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(
    private playerService: PlayerService
  ) {}

  players: Player[] = [];

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }

  ngOnInit(): void {
    this.getPlayers();
  }

}
