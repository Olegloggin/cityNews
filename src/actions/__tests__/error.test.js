import {errorAction} from '../errors';
import {createStore} from 'redux';
import reducers from '../../store/reducers';

let store;

beforeEach(() => {
  store = createStore(reducers);
});

it('check erorr', () => {
  store.dispatch(errorAction.getError('error text'));
  expect(store.getState().errorReducer.isError).toBe(true);
  expect(store.getState().errorReducer.errorText).toBe('error text');

  store.dispatch(errorAction.resetError());
  expect(store.getState().errorReducer.isError).toBe(false);
  expect(store.getState().errorReducer.errorText).toBe('');
});
