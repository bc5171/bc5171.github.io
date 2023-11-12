import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-decode-game',
  templateUrl: './decode-game.component.html',
  styleUrls: ['./decode-game.component.css']
})
export class DecodeGameComponent implements OnInit {
  
  constructor(
    private playerService: PlayerService,
    private heroService: HeroService
    ) {}
    
  strengthHeroes: Hero[] = [];
  agilityHeroes: Hero[] = [];
  intelligenceHeroes: Hero[] = [];
  universalHeroes: Hero[] = [];
  
  players: Player[] = [];
  
  // Radio button selection
  selectedPlayer: string = "";
  // Text input
  encodedString: string = "";

  strengthHero: string = "";
  agilityHero: string = "";
  intelligenceHero: string = "";
  universalHero: string = "";

  onChipSelected(chipValue: string): void {
    this.selectedPlayer = chipValue;
  }

  decodeEncodedString(): void {

    let offset: number = 0;
    let strengthOffset: number = 0;
    let agilityOffset: number = 10;
    let intelligenceOffset: number = 20;
    let universalOffset: number = 30;

    offset = this.playerService.playerOffset(this.selectedPlayer);

    const seperateEncodedString = this.encodedString.split(',');
    const encodedStringArr = seperateEncodedString.map(str => Number(str));
    const strengthHeroIndex = encodedStringArr[strengthOffset + offset];
    const agilityHeroIndex = encodedStringArr[agilityOffset + offset];
    const intelligenceHeroIndex = encodedStringArr[intelligenceOffset + offset];
    const universalHeroIndex = encodedStringArr[universalOffset + offset];

    this.strengthHero = this.strengthHeroes[strengthHeroIndex].name;
    console.log(`AgilityHeroIndex: ${agilityHeroIndex}`);
    console.log(`${JSON.stringify(this.agilityHeroes)}`)
    this.agilityHero = this.agilityHeroes[agilityHeroIndex].name;
    this.intelligenceHero = this.intelligenceHeroes[intelligenceHeroIndex].name;
    this.universalHero = this.universalHeroes[universalHeroIndex].name;

  }


  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
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

  ngOnInit(): void {
    this.getPlayers();
    this.getStrengthHeroes();
    this.getAgilityHeroes();
    this.getIntelligenceHeroes();
    this.getUniversalHeroes();
  }

}
