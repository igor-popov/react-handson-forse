import { combineReducers, Reducer } from 'redux';
import { IAppState } from '../domain/state';
import products from './products/reducers';
import product from './product/reducers';

const rootReducer: Reducer<IAppState> = combineReducers({
  products,
  product
});

export default rootReducer;
