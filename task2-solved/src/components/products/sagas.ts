import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constants';

import { IProduct } from '../../domain/product';
import { productApi } from '../../api/productApi';

function requestProductsFromApi(): Promise<IProduct[]> {
  return productApi.getProductsWithWeight();
}

function* loadAllProducts() {
  try {
    const products: IProduct[] = yield call(requestProductsFromApi);
    yield put({type: constants.ALL_PRODUCTS_REQUEST_SUCCEEDED, products: products});
  } catch (e) {
    yield put({type: constants.ALL_PRODUCTS_REQUEST_FAILED, message: e.message});
  }
}

function* getAllProducts() {
  yield takeLatest(constants.ALL_PRODUCTS_REQUEST_START, loadAllProducts);
}

export default getAllProducts;
