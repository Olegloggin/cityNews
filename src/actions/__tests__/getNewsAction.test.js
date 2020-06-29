import {getNewsAction} from '../getNewsAction';
import backend from '../../constants/backend';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {createStore} from 'redux';
import reducers from '../../store/reducers';
import {createStoreEnhancer} from '../../store';

let store;
const axiosMock = new MockAdapter(axios);

beforeEach(() => {
  axiosMock.reset();
  store = createStore(reducers, createStoreEnhancer());
});

it('check item news to store for first page', async () => {
  axiosMock
    .onGet(
      `${backend.URL}/public-api/v1.4/news/?fields=id,title,publication_date,body_text,images,site_url&location=spb&actual_only=true&text_format=text&page=1`,
    )
    .reply(200, {
      count: 4446,
      next:
        'https://kudago.com/public-api/v1.4/news/?actual_only=true&fields=id%2Ctitle%2Cpublication_date%2Cbody_text%2Cimages%2Csite_url&location=spb&page=2&text_format=text',
      previous: null,
      results: [
        {
          id: 30384,
          publication_date: 1588942346,
          title: 'Летний Петербург',
          images: [
            {
              image:
                'https://kudago.com/media/images/news/09/fe/09feb83bc84f061192dca1930e4a722f.jpg',
              source: {
                name: 'terijoki.spb.ru',
                link:
                  'https://terijoki.spb.ru/f3/viewtopic.php?p=117144#p117144',
              },
            },
          ],
          site_url:
            'https://kudago.com/all/news/letnij-peterburg-dachnii-otdih-v-20-vere/',
        },
      ],
    });

  expect.assertions(1);
  await store.dispatch(getNewsAction(1, 'spb'));
  const state = store.getState();
  expect(state.newsReducer.news).toEqual([
    {
      id: 30384,
      publication_date: 1588942346,
      title: 'Летний Петербург',
      images: [
        {
          image:
            'https://kudago.com/media/images/news/09/fe/09feb83bc84f061192dca1930e4a722f.jpg',
          source: {
            name: 'terijoki.spb.ru',
            link: 'https://terijoki.spb.ru/f3/viewtopic.php?p=117144#p117144',
          },
        },
      ],
      site_url:
        'https://kudago.com/all/news/letnij-peterburg-dachnii-otdih-v-20-vere/',
    },
  ]);
});

it('check item news to store for second page', async () => {
  axiosMock
    .onGet(
      `${backend.URL}/public-api/v1.4/news/?fields=id,title,publication_date,body_text,images,site_url&location=spb&actual_only=true&text_format=text&page=2`,
    )
    .reply(200, {
      count: 4446,
      next:
        'https://kudago.com/public-api/v1.4/news/?actual_only=true&fields=id%2Ctitle%2Cpublication_date%2Cbody_text%2Cimages%2Csite_url&location=spb&page=2&text_format=text',
      previous: null,
      results: [
        {
          id: 1234567,
          publication_date: 1588942346,
          title: 'Летний Петербург',
          images: [
            {
              image:
                'https://kudago.com/media/images/news/09/fe/09feb83bc84f061192dca1930e4a722f.jpg',
              source: {
                name: 'terijoki.spb.ru',
                link:
                  'https://terijoki.spb.ru/f3/viewtopic.php?p=117144#p117144',
              },
            },
          ],
          site_url:
            'https://kudago.com/all/news/letnij-peterburg-dachnii-otdih-v-20-vere/',
        },
      ],
    });

  expect.assertions(1);
  await store.dispatch(getNewsAction(2, 'spb'));
  const state = store.getState();
  expect(state.newsReducer.news).toEqual([
    {
      id: 1234567,
      publication_date: 1588942346,
      title: 'Летний Петербург',
      images: [
        {
          image:
            'https://kudago.com/media/images/news/09/fe/09feb83bc84f061192dca1930e4a722f.jpg',
          source: {
            name: 'terijoki.spb.ru',
            link: 'https://terijoki.spb.ru/f3/viewtopic.php?p=117144#p117144',
          },
        },
      ],
      site_url:
        'https://kudago.com/all/news/letnij-peterburg-dachnii-otdih-v-20-vere/',
    },
  ]);
});
