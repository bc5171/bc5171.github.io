import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { rankStats } from './rankStats';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // getStrengthHeroes(): Observable<Hero[]>{
  //   const heroes = HEROES.splice(0, 31);
  //   return of(heroes);
  // }

  getStrengthHeroes(fullHeroArr: Hero[]): Hero[] {
    return fullHeroArr.slice(0, 31);
  }

  getAgilityHeroes(fullHeroArr: Hero[]): Hero[] {
    return fullHeroArr.slice(31, 63);
  }

  getIntelligenceHeroes(fullHeroArr: Hero[]): Hero[] {
    return fullHeroArr.slice(62, 94);
  }

  getUniversalHeroes(fullHeroArr: Hero[]): Hero[] {
    return fullHeroArr.slice(93, 125);
  }

  getAllHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    return heroes;
  }

  calculateStdDeviation(numbers: number[], average: number): number {

    let stdDev: number = 0;

    // calculate squared difference
    const squaredDifference = numbers.map(value => Math.pow(value - average, 2));

    // calculate variance
    const variance = squaredDifference.reduce((sum, value) => sum + value, 0) / numbers.length;

    // calculate std deviation
    stdDev = Math.sqrt(variance);

    return stdDev;

  }

  calculateAverage(numbers: number[], length: number) : number {
    let n: number = 0;

    const mean = numbers.reduce((sum, value) => sum + value, 0) / length;

    return n;
  }

  averageHeroes(heroArray: Hero[]): rankStats {

    const r: rankStats = {averageRank: 0, stdDeviation: 0};
    const n = heroArray.length;
    let extractedRank: number[] = [];

    for (let h of heroArray) {
      extractedRank.push(h.rank);
    }

    r.averageRank = this.calculateAverage(extractedRank, n);
    r.stdDeviation = this.calculateStdDeviation(extractedRank, r.averageRank);

    return r;

  }

}
