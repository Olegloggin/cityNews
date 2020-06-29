import {getCityListAction} from '../getCityListAction';
import backend from '../../constants/backend';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {createStore} from 'redux';
import reducers from '../../store/reducers';
import {createStoreEnhancer} from '../../store';

let store;
const axiosMock = new MockAdapter(axios);

beforeEach(() => {
  axiosMock.reset();
  store = createStore(reducers, createStoreEnhancer());
});

it('check load cityes list to store', async () => {
  axiosMock.onGet(`${backend.URL}/public-api/v1.4/locations`).reply(200, [
    {slug: 'ekb', name: 'Екатеринбург'},
    {slug: 'krasnoyarsk', name: 'Красноярск'},
    {slug: 'krd', name: 'Краснодар'},
    {slug: 'kzn', name: 'Казань'},
    {slug: 'msk', name: 'Москва'},
    {slug: 'nnv', name: 'Нижний Новгород'},
    {slug: 'nsk', name: 'Новосибирск'},
    {slug: 'online', name: 'Онлайн'},
    {slug: 'sochi', name: 'Сочи'},
    {slug: 'spb', name: 'Санкт-Петербург'},
  ]);

  expect.assertions(1);
  await store.dispatch(getCityListAction());
  const state = store.getState();
  expect(state.settingsReducer.cityes).toEqual([
    {slug: 'ekb', name: 'Екатеринбург'},
    {slug: 'krasnoyarsk', name: 'Красноярск'},
    {slug: 'krd', name: 'Краснодар'},
    {slug: 'kzn', name: 'Казань'},
    {slug: 'msk', name: 'Москва'},
    {slug: 'nnv', name: 'Нижний Новгород'},
    {slug: 'nsk', name: 'Новосибирск'},
    {slug: 'online', name: 'Онлайн'},
    {slug: 'sochi', name: 'Сочи'},
    {slug: 'spb', name: 'Санкт-Петербург'},
  ]);
});
