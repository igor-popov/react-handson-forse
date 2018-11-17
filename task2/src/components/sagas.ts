import { SagaMiddleware } from 'redux-saga';
import { fork, all } from 'redux-saga/effects';
import { IAppState } from '../domain/state';

import products from './products/sagas';
import product from './product/sagas';

function* rootSaga() {
  yield all ([
       fork(products),
       fork(product)
   ]);
}

export function startSagas(sagaMiddleware: SagaMiddleware<IAppState>) {
  sagaMiddleware.run(rootSaga);
}
