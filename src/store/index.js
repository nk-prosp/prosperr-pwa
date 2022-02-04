import {watchAuthenticationTrue} from "../containers/Home/store/saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";

import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(watchAuthenticationTrue);
export default store;
