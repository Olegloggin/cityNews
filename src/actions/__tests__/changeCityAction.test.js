import {changeCityAction} from '../changeCityAction';
import {createStore} from 'redux';
import reducers from '../../store/reducers';

let store;

beforeEach(() => {
  store = createStore(reducers);
});

it('check add cityes to store', () => {
  store.dispatch(
    changeCityAction({
      slug: 'spb',
      name: 'Санкт-Петербург',
    }),
  );

  const state = store.getState();
  expect(state.settingsReducer.currentCity).toEqual({
    slug: 'spb',
    name: 'Санкт-Петербург',
  });
});
