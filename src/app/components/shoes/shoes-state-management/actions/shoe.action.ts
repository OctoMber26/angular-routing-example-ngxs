import { ShoeModel } from '../shoes model/shoe.interface';

export class fetchShoes {
  static readonly type = '[Heroes] Set';

  //constructor(public payload: ShoeModel[]) {}
}

export class getShoe {
  static readonly type = '[GERSHOE] Get shoe';

  constructor(public id: number) {}
}
