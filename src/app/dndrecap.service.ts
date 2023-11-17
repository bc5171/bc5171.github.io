import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DnDRecap } from './dndRecap';
import { DNDRECAPS } from './dnd-recap-entries';

@Injectable({
  providedIn: 'root'
})
export class DndrecapService {

  constructor() { }

  getAllRecaps(): Observable<DnDRecap[]>{
    const dndRecaps = of(DNDRECAPS);
    return dndRecaps;
  }

}
