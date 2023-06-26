import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';
import { ShoeModel } from '../shoes model/shoe.interface';
import { ShoeService } from '../shoes service/shoes.service';
import { State, Action, StateContext } from '@ngxs/store';
import { fetchShoes, getShoe } from '../actions/shoe.action';
import { tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

export interface ShoeStateModel {
  shoes: ShoeModel[];
}

@State<ShoeStateModel>({
  name: 'shoes',
  defaults: {
    shoes: [],
  },
})
@Injectable()
export class ShoeState {
  constructor(
    private shoeService: ShoeService,
    private route: ActivatedRoute
  ) {}

  @Selector()
  static shoes(state: ShoeStateModel) {
    return state.shoes;
  }

  @Action(fetchShoes)
  fetch({ patchState }: StateContext<ShoeStateModel>) {
    return this.shoeService.getShoes().pipe(
      tap((res) => {
        patchState({ shoes: res });
      })
    );
    // Update the state with the fetched heroes data
  }

  @Action(getShoe)
  get({ patchState }: StateContext<ShoeStateModel>, { id }: getShoe) {
    return this.shoeService.getHeroId(id).pipe(
      tap((res) => {
        patchState({});
      })
    );
  }
}
