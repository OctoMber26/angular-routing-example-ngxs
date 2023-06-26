import { Component } from '@angular/core';

import { Store } from '@ngxs/store';
import { ShoeState } from './shoes-state-management/state/shoe.state';
import { fetchShoes } from './shoes-state-management/actions/shoe.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css'],
})
export class ShoesComponent {
  data$ = this.store.select(ShoeState.shoes);

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.store.dispatch(new fetchShoes());
  }
}
