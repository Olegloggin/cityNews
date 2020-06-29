import {networkActions} from '../network';
import {createStore} from 'redux';
import reducers from '../../store/reducers';

let store;

beforeEach(() => {
  store = createStore(reducers);
});

it('check isRequested in store', () => {
  store.dispatch(networkActions.networkRequestStarted());
  expect(store.getState().networkReducer.isRequested).toBe(true);

  store.dispatch(networkActions.networkRequestFinished());
  expect(store.getState().networkReducer.isRequested).toBe(false);
});
