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

  fullHeroArr: Hero[] = [];
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
    this.getAllHeroes();
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

  confirmToleranceOfTeams(team1Rank: number[], team2Rank: number[]): boolean {

    let team1RankAvg: number = 0;
    let team1count: number = 0;
    let team2RankAvg: number = 0;
    let team2count: number = 0;

    for (let player in team1Rank) {
      team1RankAvg += team1Rank[player];
      team1count++;
    }

    for (let player in team2Rank) {
      team2RankAvg += team2Rank[player];
      team2count++;
    }

    team1RankAvg = team1RankAvg / team1count;
    team2RankAvg = team2RankAvg / team2count;

    let teamsAverage = (team1RankAvg + team2RankAvg) / 2;
    let lowerBandTeamsAverage = teamsAverage - .125;
    let higherBandTeamsAverage = teamsAverage + .125;

    if ((lowerBandTeamsAverage < team1RankAvg && higherBandTeamsAverage > team1RankAvg) && 
      (lowerBandTeamsAverage < team2RankAvg && higherBandTeamsAverage > team2RankAvg)) {
        return true;
    }

    return false;
  }

  averageThemAll(): number[][] {

    // randomly generate set of 4 heroes per person
    // confirm teams are balanced
    // +- .25 of each other
    // if one teams has heroes > 4 and other doesn't... toss (redo)

    let heroesArr: number[][] = [[]];
    let notHappyYet: boolean = true;
    
    console.log(`selectedPlayers: ${JSON.stringify(this.selectedPlayers)}`);
    
    while (notHappyYet) {
      
      let team1HasAtLeast4: boolean = false;
      let team2HasAtLeast4: boolean = false;
      let team1Rank: number[] = [];
      let team2Rank: number[] = [];
      
      heroesArr = this.hashService.rollHeroes();

      for (let player of this.selectedPlayers) {

        console.log(`Player in selectedPlayers: ${JSON.stringify(player)}`)
      
        let offset: number = this.playerService.playerOffset(player);
        
        let strengthHero: Hero = this.strengthHeroes[heroesArr[0][offset]];
        let agilityHero: Hero = this.agilityHeroes[heroesArr[1][offset]];
        let intelligenceHero: Hero = this.intelligenceHeroes[heroesArr[2][offset]];
        let universalHero: Hero = this.universalHeroes[heroesArr[3][offset]];

        let avgRank = (strengthHero.rank + agilityHero.rank + intelligenceHero.rank + universalHero.rank) / 4;
        team1Rank.push(avgRank);

        if (team1HasAtLeast4 == false && (strengthHero.rank >= 4 || agilityHero.rank >= 4 || intelligenceHero.rank >= 4 || universalHero.rank >= 4)) {
          team1HasAtLeast4 = true;
        }
  
      }

      for (let player of this.selectedPlayers2) {
        let offset: number = this.playerService.playerOffset(player);
        
        let strengthHero: Hero = this.strengthHeroes[heroesArr[0][offset]];
        let agilityHero: Hero = this.agilityHeroes[heroesArr[1][offset]];
        let intelligenceHero: Hero = this.intelligenceHeroes[heroesArr[2][offset]];
        let universalHero: Hero = this.universalHeroes[heroesArr[3][offset]];

        let avgRank = (strengthHero.rank + agilityHero.rank + intelligenceHero.rank + universalHero.rank) / 4;
        team2Rank.push(avgRank);

        if (team2HasAtLeast4 == false && (strengthHero.rank >= 4 || agilityHero.rank >= 4 || intelligenceHero.rank >= 4 || universalHero.rank >= 4)) {
          team2HasAtLeast4 = true;
        }
      }

      console.log(`Team 1 Ranks: ${team1Rank}`);
      console.log(`Team 2 Ranks: ${team2Rank}`);

      if (!team1HasAtLeast4 || !team2HasAtLeast4) {
        continue;
      }

      let rankTolerance = this.confirmToleranceOfTeams(team1Rank, team2Rank);

      if (rankTolerance) {
        notHappyYet = false;
      }
    }
    
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

  getAllHeroes(): void {
    this.heroService.getAllHeroes().subscribe(fullHeroArr => this.fullHeroArr = fullHeroArr);
  }

  getStrengthHeroes(): void {
    this.strengthHeroes = this.heroService.getStrengthHeroes(this.fullHeroArr);
  }

  getAgilityHeroes(): void {
    this.agilityHeroes = this.heroService.getAgilityHeroes(this.fullHeroArr);
  }

  getIntelligenceHeroes(): void {
    this.intelligenceHeroes = this.heroService.getIntelligenceHeroes(this.fullHeroArr);
  }

  getUniversalHeroes(): void {
    this.universalHeroes = this.heroService.getUniversalHeroes(this.fullHeroArr);
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
        heroesArr = this.averageThemAll();
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