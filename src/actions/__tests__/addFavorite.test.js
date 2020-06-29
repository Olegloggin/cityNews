import {addFavoriteAction} from '../addFavorite';
import {createStore} from 'redux';
import reducers from '../../store/reducers';

let store;

beforeEach(() => {
  store = createStore(reducers);
});

it('add favorite item to state', () => {
  store.dispatch(
    addFavoriteAction({
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
    }),
  );

  const state = store.getState();
  expect(state.newsReducer.favorite).toEqual([
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
