import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import { IAppState } from './domain/state';
import configureStore from './components/store';

const initialState = { products: {}, shoppingList: {}, product: {}};
const store: Store<IAppState> = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
