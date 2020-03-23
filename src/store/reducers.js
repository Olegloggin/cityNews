import {combineReducers} from 'redux';

import {newsReducer} from '../reducers/newsReducer';
import {errorReducer} from '../reducers/errorReducer';

const commonReducer = {
  newsReducer,
  errorReducer
};

const reducers = combineReducers(commonReducer);

export default reducers;
