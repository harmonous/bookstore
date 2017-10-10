import 'react-hot-loader/patch';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import 'font-awesome/scss/font-awesome.scss';
import './style.scss';

import Root from './components/Root';
import reducer from './reducers';
import rootSaga from './sagas';
import { fetchProductsRecent, fetchCategories } from './actions/products';


/* eslint-disable no-underscore-dangle */
const preloadedState = {};
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeCreateStore = () => composeEnhancers(applyMiddleware(sagaMiddleware))(createStore);
const finalCreateStore = composeCreateStore();
const store = finalCreateStore(reducer, preloadedState);
sagaMiddleware.run(rootSaga);

store.dispatch(fetchCategories());
store.dispatch(fetchProductsRecent());


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Root);


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Root', () => { render(Root); });
}
