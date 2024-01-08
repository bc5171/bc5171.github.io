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
    private heroService: HeroService,
    ) {}
    
  fullHeroArr: Hero[] = [];
  strengthHeroes: Hero[] = [];
  agilityHeroes: Hero[] = [];
  intelligenceHeroes: Hero[] = [];
  universalHeroes: Hero[] = [];
  
  players: Player[] = [];
  heroes: Hero[] = [];
  
  // Radio button selection
  selectedPlayer: string = "";
  // Text input
  encodedString: string = "";

  strengthHero: Hero = {} as Hero;
  agilityHero: Hero = {} as Hero;
  intelligenceHero: Hero = {} as Hero;
  universalHero: Hero = {} as Hero;

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

    console.log(`StrengthHero: ${this.strengthHeroes[strengthHeroIndex]}`);
    this.strengthHero = this.strengthHeroes[strengthHeroIndex];
    console.log(`AgilityHeroIndex: ${agilityHeroIndex}`);
    console.log(`${JSON.stringify(this.agilityHeroes)}`)
    this.agilityHero = this.agilityHeroes[agilityHeroIndex];
    this.intelligenceHero = this.intelligenceHeroes[intelligenceHeroIndex];
    this.universalHero = this.universalHeroes[universalHeroIndex];

  }


  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
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

  ngOnInit(): void {
    this.getPlayers();
    this.getAllHeroes();
    this.getStrengthHeroes();
    this.getAgilityHeroes();
    this.getIntelligenceHeroes();
    this.getUniversalHeroes();
  }

}
