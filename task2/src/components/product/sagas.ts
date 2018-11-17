import { call, put, takeLatest, fork, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as constants from './constants';
import { SINGLE_PRODUCT_UPDATED } from '../products/constants';

import { IProduct } from '../../domain/product';
import { productApi } from '../../api/productApi';

function requestProductFromApi(id: string): Promise<IProduct> {
  return productApi.getProduct(id);
}

function* loadProduct(action: any) {
  try {
    const product: IProduct = yield call(requestProductFromApi, action.productId);
    yield put({type: constants.PRODUCT_REQUEST_SUCCEEDED, product});
  } catch (e) {
    yield put({type: constants.PRODUCT_REQUEST_FAILED, message: e.message});
  }
}

function saveProductUsingApi(product: IProduct): Promise<any> {
  return productApi.upsertProduct(product);
}

function* saveProduct(action: {product: IProduct}) {
  try {
    const product: IProduct = action.product;
    yield call(saveProductUsingApi, action.product);
    yield put({type: constants.PRODUCT_SAVE_SUCCEEDED, product});
    yield put({type: SINGLE_PRODUCT_UPDATED, product});
    yield call(delay, 2000);
    yield put({type: constants.PRODUCT_SAVE_SUCCEEDED_A_WHILE_AGO, product});
  } catch (e) {
    yield put({type: constants.PRODUCT_SAVE_FAILED, message: e.message});
  }
}

function* getProduct() {
  yield takeLatest(constants.PRODUCT_REQUEST_START, loadProduct);
}

function* upsertProduct() {
  yield takeLatest(constants.PRODUCT_SAVE_START, saveProduct as (action: any) =>void);
}

function* root() {
  yield all([
       fork(getProduct),
       fork(upsertProduct)
   ]);
}

export default root;
