import { createStore, compose, applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga';

import reducer from './reducers'
import rootSaga from './sagas'

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = __DEV__
    ? compose(
        applyMiddleware(...middlewares)
    )
    : applyMiddleware(...middlewares)


const store = createStore(reducer, composer);

sagaMiddleware.run(rootSaga);

export default store;