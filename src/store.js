import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { profileStorePack } from 'smart-home-store';

const rootReducer = combineReducers({
  [profileStorePack.name]: profileStorePack.reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState) => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default configureStore;
