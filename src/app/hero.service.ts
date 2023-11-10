import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getStrengthHeroes(): Observable<Hero[]>{
    const heroes = HEROES.splice(0, 31);
    return of(heroes);
  }

  getAgilityHeroes(): Observable<Hero[]>{
    const heroes = HEROES.splice(0, 31);
    return of(heroes);
  }

  getIntelligenceHeroes(): Observable<Hero[]>{
    const heroes = HEROES.splice(0, 31);
    return of(heroes);
  }

  getUniversalHeroes(): Observable<Hero[]>{
    const heroes = HEROES.splice(0, 31);
    return of(heroes);
  }

  getAllHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    return heroes;
  }
}
