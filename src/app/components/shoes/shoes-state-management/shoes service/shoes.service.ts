import { Injectable } from '@angular/core';
import { ShoeModel } from '../shoes model/shoe.interface';
import { SHOES } from '../shoes model/shoe.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoeService {
  constructor() {}

  getShoes(): Observable<ShoeModel[]> {
    const shoes = of(SHOES);
    return shoes;
  }

  getHeroId(id: number): Observable<ShoeModel> {
    const shoe = SHOES.find((h) => h.id === id)!;

    return of(shoe);
  }
}
