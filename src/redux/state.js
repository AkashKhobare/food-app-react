import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers'

import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas/saga';

const sagaMW = createSagaMiddleware();
const store = createStore(rootReducer, {}, applyMiddleware(sagaMW));

sagaMW.run(rootSaga)

export default store;