import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { HashService } from '../hash.service';
import { HeroOffset } from '../hero-offset';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.css']
})
export class GameCreationComponent implements OnInit {

  constructor(
    private playerService: PlayerService,
    private hashService: HashService,
    private clipboard: Clipboard
  ) {}

  playersTeam1: Player[] = [];
  playersTeam2: Player[] = [];

  playerDireTeam: string = "";

  strengthHashOutput: number[] = [];
  agilityHashOutput: number[] = [];
  intelligenceHashOutput: number[] = [];
  universalHashOutput: number[] = [];

  fullHashOutput: number[] = [];

  selectedPlayers: string[] = [];
  selectedPlayers2: string[] = [];
  totalSelectedPlayers: string[] = [];

  selectedReroll: string = "";
  reRollSelections: string[] = ['No Rerolls', 'Everyone is Happy', 'Meh', 'Everyone is Pissed', 'Average Them All'];

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.playersTeam1 = players);
    this.playerService.getPlayers().subscribe(players => this.playersTeam2 = players);
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  clickedSomeone(playerList: any): void {
    this.selectedPlayers = playerList.selectedOptions.selected.map((item: { value: any; }) => item.value);
  }

  clickedSomeone2(playerList: any): void {
    this.selectedPlayers2 = playerList.selectedOptions.selected.map((item: { value: any; }) => item.value);
  }

  calculateGameMechanics(): void {

    // First roll for the heroes
    const heroesArr: number[][] = this.hashService.rollHeroes();

    this.totalSelectedPlayers = this.selectedPlayers.concat(this.selectedPlayers2);

    const decideIfDire: number = this.hashService.getRandomInt(this.totalSelectedPlayers.length);

    this.playerDireTeam = this.totalSelectedPlayers[decideIfDire];
    
    this.strengthHashOutput = heroesArr[0];
    this.agilityHashOutput = heroesArr[1];
    this.intelligenceHashOutput = heroesArr[2];
    this.universalHashOutput = heroesArr[3];
    
    for (const arr of heroesArr) {
      this.fullHashOutput = heroesArr.reduce((result, innerArray) => result.concat(innerArray), []);
    }
    
    const fullHashOutputString: string = this.fullHashOutput.join(',');

    this.clipboard.copy(fullHashOutputString);

  }

  // calculateEveryoneHappy(): number[][] {

  //   let i: number = 0;
  //   while (i < 10) {
  //     if (this.selectedPlayers[i] == 1) {

  //     }
  //   }

  // }

}