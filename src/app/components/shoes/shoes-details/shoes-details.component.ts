import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { getShoe } from '../shoes-state-management/actions/shoe.action';
import { ActivatedRoute } from '@angular/router';
import { ShoeState } from '../shoes-state-management/state/shoe.state';

@Component({
  selector: 'app-shoes-details',
  templateUrl: './shoes-details.component.html',
  styleUrls: ['./shoes-details.component.css'],
})
export class ShoesDetailsComponent {
  data$ = this.store.select(ShoeState.shoes);

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {}

  getHeroId() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(new getShoe(id));
  }
}
