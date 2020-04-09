import {combineReducers} from 'redux';

import {networkReducer} from '../reducers/networkReducer';
import {newsReducer} from '../reducers/newsReducer';
import {errorReducer} from '../reducers/errorReducer';
import {settingsReducer} from '../reducers/settingsReducer';

const commonReducer = {
  networkReducer,
  newsReducer,
  errorReducer,
  settingsReducer,
};

const reducers = combineReducers(commonReducer);

export default reducers;
