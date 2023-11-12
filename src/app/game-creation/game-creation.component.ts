import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { HashService } from '../hash.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { rankStats } from '../rankStats';

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.css']
})
export class GameCreationComponent implements OnInit {

  constructor(
    private playerService: PlayerService,
    private hashService: HashService,
    private clipboard: Clipboard,
    private heroService: HeroService
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

  strengthHeroes: Hero[] = [];
  agilityHeroes: Hero[] = [];
  intelligenceHeroes: Hero[] = [];
  universalHeroes: Hero[] = [];

  selectedReroll: string = "";
  reRollSelections: string[] = ['No Rerolls', 'Everyone is Happy', 'Meh', 'Everyone is Pissed', 'Average Them All'];

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.playersTeam1 = players);
    this.playerService.getPlayers().subscribe(players => this.playersTeam2 = players);
  }

  ngOnInit(): void {
    this.getPlayers();
    this.getStrengthHeroes();
    this.getAgilityHeroes();
    this.getIntelligenceHeroes();
    this.getUniversalHeroes();
  }

  clickedSomeone(playerList: any): void {
    this.selectedPlayers = playerList.selectedOptions.selected.map((item: { value: any; }) => item.value);
  }

  clickedSomeone2(playerList: any): void {
    this.selectedPlayers2 = playerList.selectedOptions.selected.map((item: { value: any; }) => item.value);
  }

  averageThemAll(): number[][] {

    let heroesArr: number[][] = [[]];
    let averageStrengthHero: rankStats = {averageRank: 0, stdDeviation: 0};
    let averageAgilityHero: rankStats = {averageRank: 0, stdDeviation: 0};
    let averageIntelligenceHero: rankStats = {averageRank: 0, stdDeviation: 0};
    let averageUniversalHero: rankStats = {averageRank: 0, stdDeviation: 0};

    averageStrengthHero = this.heroService.averageHeroes(this.strengthHeroes);
    averageAgilityHero = this.heroService.averageHeroes(this.agilityHeroes);
    averageIntelligenceHero = this.heroService.averageHeroes(this.intelligenceHeroes);
    averageUniversalHero = this.heroService.averageHeroes(this.universalHeroes);

    return heroesArr;

  }

  everyoneIsPissed(): number[][] {
    let heroesArr: number[][] = [[]];

    for (let player of this.totalSelectedPlayers) {
      heroesArr = this.hashService.rollHeroes();
      let notHappyYet: boolean = true;

      while (notHappyYet) {
        
        let offset: number = this.playerService.playerOffset(player);
        let strengthHero: Hero = this.strengthHeroes[heroesArr[0][offset]];
        let agilityHero: Hero = this.agilityHeroes[heroesArr[1][offset]];
        let intelligenceHero: Hero = this.intelligenceHeroes[heroesArr[2][offset]];
        let universalHero: Hero = this.universalHeroes[heroesArr[3][offset]];

        if (strengthHero.rank > 2.01 && agilityHero.rank > 2.01
          && intelligenceHero.rank > 2.01 && universalHero.rank > 2.01) {
            heroesArr = this.hashService.rollHeroes();
          }
        else {
          notHappyYet = false;
        }

      }


    }

    return heroesArr;
  }

  meh(): number[][] {
    // keep rolling until at least 1 hero is > 2.19 and not less than 3.5
    let heroesArr: number[][] =[[]];

    for (let player of this.totalSelectedPlayers) {

      heroesArr = this.hashService.rollHeroes();
      let notHappyYet: boolean = true;

      while (notHappyYet) {
        let offset: number = this.playerService.playerOffset(player);
        let strengthHero: Hero = this.strengthHeroes[heroesArr[0][offset]];
        let agilityHero: Hero = this.agilityHeroes[heroesArr[1][offset]];
        let intelligenceHero: Hero = this.intelligenceHeroes[heroesArr[2][offset]];
        let universalHero: Hero = this.universalHeroes[heroesArr[3][offset]];

        if (strengthHero.rank < 2.19 && agilityHero.rank < 2.19
          && intelligenceHero.rank < 2.19 && universalHero.rank < 2.19) {
            heroesArr = this.hashService.rollHeroes();
          }
        else if (strengthHero.rank > 3.5) {
          heroesArr = this.hashService.rollHeroes();
        }
        else if (agilityHero.rank > 3.5) {
          heroesArr = this.hashService.rollHeroes();
        }
        else if (intelligenceHero.rank > 3.5) {
          heroesArr = this.hashService.rollHeroes();
        }
        else if (universalHero.rank > 3.5) {
          heroesArr = this.hashService.rollHeroes();
        }
        else if ((strengthHero.rank + agilityHero.rank
          + intelligenceHero.rank + universalHero.rank) / 4 < 1.99) {
            heroesArr = this.hashService.rollHeroes();
          }
        else {
          notHappyYet = false;
        }
      }

    }

    return heroesArr;

  }

  everyoneHappy(): number[][] {

    // keep rolling until 1 of 2 conditions
    // condition 1 - all character strengths are > 2.99
    // condition 2 - sum of rankings / 4 >= 2.75

    let heroesArr: number[][] = [[]];
    
    for (let player of this.totalSelectedPlayers) {
      
      heroesArr = this.hashService.rollHeroes();
      let notHappyYet: boolean = true;
      
      while (notHappyYet) {
        
        let offset: number = this.playerService.playerOffset(player);
        let strengthHero: Hero = this.strengthHeroes[heroesArr[0][offset]];
        let agilityHero: Hero = this.agilityHeroes[heroesArr[1][offset]];
        let intelligenceHero: Hero = this.intelligenceHeroes[heroesArr[2][offset]];
        let universalHero: Hero = this.universalHeroes[heroesArr[3][offset]];
        
        if (strengthHero.rank < 2.99 && agilityHero.rank < 2.99
          && intelligenceHero.rank < 2.99 && universalHero.rank < 2.99) {
          heroesArr = this.hashService.rollHeroes();
        }
        else if ((strengthHero.rank + agilityHero.rank +
          intelligenceHero.rank + universalHero.rank) / 4 < 2.74) {
          heroesArr = this.hashService.rollHeroes();
        }
        else {
          notHappyYet = false;
        }

      }
  
    }

    return heroesArr;
    
  }

  getStrengthHeroes(): void {
    this.heroService.getStrengthHeroes().subscribe(strengthHeroes => this.strengthHeroes = strengthHeroes);
  }

  getAgilityHeroes(): void {
    this.heroService.getAgilityHeroes().subscribe(agilityHeroes => this.agilityHeroes = agilityHeroes);
  }

  getIntelligenceHeroes(): void {
    this.heroService.getIntelligenceHeroes().subscribe(intelligenceHeroes => this.intelligenceHeroes = intelligenceHeroes);
  }

  getUniversalHeroes(): void {
    this.heroService.getUniversalHeroes().subscribe(universalHeroes => this.universalHeroes = universalHeroes);
  }

  calculateGameMechanics(): void {

    if (this.selectedPlayers.length < 1) {
      alert("Please select some Team 1 players.");
      return;
    } 

    if (this.selectedPlayers2.length < 1) {
      alert("Please select some Team 2 players.");
      return;
    }

    if (this.selectedReroll === "") {
      alert("Please select a ReRoll selection.");
      return;
    }


    let heroesArr: number[][] = [[]];
    this.totalSelectedPlayers = this.selectedPlayers.concat(this.selectedPlayers2);
    
    switch(this.selectedReroll) {
      case "No Rerolls":
        heroesArr = this.hashService.rollHeroes();
        break;
      case "Everyone is Happy":
        heroesArr = this.everyoneHappy();
        break;
      case "Meh":
        heroesArr = this.meh();
        break;
      case "Everyone is Pissed":
        heroesArr = this.everyoneIsPissed();
        break;
      case "Average Them All":
        break;
      default:
        break;
    }

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

}