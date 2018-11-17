import { IProductsState } from '../../domain/state';
/*import { IProduct } from '../../domain/product';
import * as constants from './constants';*/

export default function products(state: IProductsState = {}, action: any): IProductsState {
  
  /*
   Se på stateendringer som kommer fra sagas og inkluder dem i staten her
   Se på src\components\product\reducers.ts som på forbilde
  */
  
  switch (action.type) {
    default:
      return state;
  }
}
