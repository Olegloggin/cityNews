import {combineReducers} from 'redux';

import {newsReducer} from '../reducers/newsReducer';
import {errorReducer} from '../reducers/errorReducer';
import {settingsReducer} from '../reducers/settingsReducer';

const commonReducer = {
  newsReducer,
  errorReducer,
  settingsReducer,
};

const reducers = combineReducers(commonReducer);

export default reducers;
