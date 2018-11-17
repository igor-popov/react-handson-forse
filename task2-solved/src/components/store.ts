import { createStore, applyMiddleware, Store, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { startSagas } from './sagas';

import { IAppState } from '../domain/state';

export default function configureStore(initialState: IAppState): Store<IAppState> {
  const sagaMiddleware = createSagaMiddleware<IAppState>();
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store: Store<IAppState> =
    createStore<IAppState, any, any, any>(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    );

  startSagas(sagaMiddleware);

  return store;
}
