import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducers.js';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['newsReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const storePersistor = () => {
  let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return {store, persistor};
};

export default storePersistor;
