import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-decode-game',
  templateUrl: './decode-game.component.html',
  styleUrls: ['./decode-game.component.css']
})
export class DecodeGameComponent implements OnInit {

  constructor(
    private playerService: PlayerService
  ) {}

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

    // refactor in objects
    let strengthHeroes: string[] = ["Alchemist","Axe","Bristleback","Centaur Warrunner","Chaos Knight","Dawnbreaker","Doom","Dragon Knight","Earth Spirit","Earthshaker","Elder Titan","Huskar","Kunkka","Legion Commander","Lifestealer","Mars","Night Stalker","Ogre Magi","Omniknight","Primal Beast","Pudge","Slardar","Spirit Breaker","Sven","Tidehunter","Tiny","Treant Protector","Tusk","Underlord","Undying","Wraith King"];
    let agilityHeroes: string[] = ["Anti-Mage","Arc Warden","Bloodseeker","Bounty Hunter","Clinkz","Drow Ranger","Ember Spirit","Faceless Void","Gyrocopter","Hoodwink","Juggernaut","Luna","Medusa","Meepo","Monkey King","Morphling","Naga Siren","Phantom Assassin","Phantom Lancer","Razor","Riki","Shadow Fiend","Slark","Sniper","Spectre","Templar Assassin","Terrorblade","Troll Warlord","Ursa","Viper","Weaver"];
    let intelligenceHeroes: string[] = ["Ancient Apparition","Crystal Maiden","Death Prophet","Disruptor","Enchantress","Grimstroke","Invoker","Jakiro","Keeper of the Light","Leshrac","Lich","Lina","Lion","Muerta","Nature's Prophet","Necrophos","Oracle","Outworld Destroyer","Puck","Pugna","Queen of Pain","Rubick","Shadow Demon","Shadow Shaman","Silencer","Skywrath Mage","Storm Spirit","Tinker","Warlock","Witch Doctor","Zeus"];
    let universalHeroes: string[] = ["Abaddon","Bane","Batrider","Beastmaser","Brewmaser","Broodmother","Chen","Clockwerk","Dark Seer","Dark Willow","Dazzle","Enigma","IO","Lone Druid","Lycan","Magnus","Marci","Mirana","Nyx Assassin","Pangolier","Phoenix","Sand King","Snapfire","Techies","Timbersaw","Vengful Spirit","Venomancer","Visage","Void Spirit","Windranger","Winter Wyvern"];

    // refactor into a switch
    if (this.selectedPlayer === "Adam") {
      offset = 0;
    } else 
    if (this.selectedPlayer === "Cat") {
      offset = 1;
    } else
    if (this.selectedPlayer === "Eric") {
      offset = 2;
    } else 
    if (this.selectedPlayer === "Greg") {
      offset = 3;
    } else
    if (this.selectedPlayer === "Kyle") {
      offset = 4;
    } else
    if (this.selectedPlayer === "Thomas") {
      offset = 5;
    } else
    if (this.selectedPlayer === "Anthony") {
      offset = 6;
    } else
    if (this.selectedPlayer === "OtherB") {
      offset = 7;
    } else
    if (this.selectedPlayer === "OtherC") {
      offset = 8;
    } else
    if (this.selectedPlayer === "OtherD") {
      offset = 9;
    }

    const seperateEncodedString = this.encodedString.split(',');
    const encodedStringArr = seperateEncodedString.map(str => Number(str));
    const strengthHeroIndex = encodedStringArr[strengthOffset + offset];
    const agilityHeroIndex = encodedStringArr[agilityOffset + offset];
    const intelligenceHeroIndex = encodedStringArr[intelligenceOffset + offset];
    const universalHeroIndex = encodedStringArr[universalOffset + offset];

    this.strengthHero = strengthHeroes[strengthHeroIndex];
    this.agilityHero = agilityHeroes[agilityHeroIndex];
    this.intelligenceHero = intelligenceHeroes[intelligenceHeroIndex];
    this.universalHero = universalHeroes[universalHeroIndex];

  }


  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }

  ngOnInit(): void {
    this.getPlayers();
  }

}
