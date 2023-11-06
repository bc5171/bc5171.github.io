import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashService {

  constructor() { }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  randomInts(quantity: number, max: number): Set<number> {
    const numberSet: Set<number> = new Set();

    while (numberSet.size < quantity) {
      numberSet.add(Math.floor(Math.random() * max));
    }

    return numberSet;
  }

  rollHeroes(): number[][] {

    const strengthChar: Set<number> = this.randomInts(10, 31);
    const agilityChar: Set<number> = this.randomInts(10, 31);
    const intelligenceChar: Set<number> = this.randomInts(10, 31);
    const universalChar: Set<number> = this.randomInts(10, 31);

    const strengthArr: number[] = Array.from(strengthChar);
    const agilityArr: number[] = Array.from(agilityChar);
    const intelligenceArr: number[] = Array.from(intelligenceChar);
    const universalArr: number[] = Array.from(universalChar);

    return [strengthArr, agilityArr, intelligenceArr, universalArr];
    
  }

}
