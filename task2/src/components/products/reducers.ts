import { IProductsState } from '../../domain/state';
/*import { IProduct } from '../../domain/product';
import * as constants from './constants';*/

export default function products(state: IProductsState = {}, action: any): IProductsState {
  switch (action.type) {
    default:
      return state;
  }
}
