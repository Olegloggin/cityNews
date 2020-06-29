import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducers.js';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['newsReducer', 'settingsReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const createStoreEnhancer = () => {
  return applyMiddleware(thunk);
};

const storePersistor = () => {
  const store = createStore(persistedReducer, {}, createStoreEnhancer());
  const persistor = persistStore(store);
  return {store, persistor};
};

export default storePersistor;
