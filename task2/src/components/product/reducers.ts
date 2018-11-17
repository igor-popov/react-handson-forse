import { ICurrentProductState } from '../../domain/state';
import * as constants from './constants';

export default function product(state: ICurrentProductState = {}, action: any): ICurrentProductState {
  let newState: ICurrentProductState = state;
  switch (action.type) {
    case constants.PRODUCT_REQUEST_START:
      newState = Object.assign({}, state, {current: {}});
      return newState;
    case constants.PRODUCT_REQUEST_SUCCEEDED:
      newState = Object.assign({}, state, {current: action.product, isJustSaved: false});
      return newState;
    case constants.PRODUCT_REQUEST_FAILED:
      newState = Object.assign({}, state, {errorMessage: action.message});
      return newState;
    case constants.PRODUCT_SAVE_START:
      newState = Object.assign({}, state, {isJustSaved: false});
      return newState;
    case constants.PRODUCT_SAVE_SUCCEEDED:
      newState = Object.assign({}, state, {isJustSaved: true, current: action.product});
      return newState;
    case constants.PRODUCT_SAVE_SUCCEEDED_A_WHILE_AGO:
      newState = Object.assign({}, state, {isJustSaved: false});
      return newState;
    case constants.PRODUCT_SAVE_FAILED:
      newState = Object.assign({}, state, {errorMessage: action.message});
      return newState;
    default:
      return state;
  }
}
