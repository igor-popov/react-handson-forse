import { /*call, put,*/ takeLatest } from 'redux-saga/effects';
import * as constants from './constants';

/*
import { IProduct } from '../../domain/product';
import { productApi } from '../../api/productApi';

function requestProductsFromApi(): Promise<IProduct[]> {
  return productApi.getProductsWithWeight();
}
*/

function* loadAllProducts() {
  /*
   1. henting av data fra requestProductsFromApi
   2. håndtering av nedlastning exception
  */

  try {
    // constants.ALL_PRODUCTS_REQUEST_SUCCEEDED
  } catch (e) {
    // constants.ALL_PRODUCTS_REQUEST_FAILED
  }
  yield undefined;
}

function* getAllProducts() {
  yield takeLatest(constants.ALL_PRODUCTS_REQUEST_START, loadAllProducts);
}

export default getAllProducts;
