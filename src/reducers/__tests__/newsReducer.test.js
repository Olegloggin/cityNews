import {newsReducer} from '../newsReducer';
import {
  getNewsSuccessful,
  getTopNewsSuccessful,
} from '../../actions/getNewsAction';
import {addFavorite} from '../../actions/addFavorite';

it('old news shold be remove and new news shold be added', () => {
  const action = getTopNewsSuccessful({
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
              link: 'https://terijoki.spb.ru/f3/viewtopic.php?p=117144#p117144',
            },
          },
        ],
        site_url:
          'https://kudago.com/all/news/letnij-peterburg-dachnii-otdih-v-20-vere/',
      },
    ],
  });

  const initialState = {
    news: [
      {
        id: 777,
        publication_date: 158894234,
        title: 'Москва',
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
    ],
    favorite: [],
  };

  const newState = newsReducer(initialState, action);
  expect(newState.news).toEqual([
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

it('shoul be concatination old and new news', () => {
  const action = getNewsSuccessful({
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
              link: 'https://terijoki.spb.ru/f3/viewtopic.php?p=117144#p117144',
            },
          },
        ],
        site_url:
          'https://kudago.com/all/news/letnij-peterburg-dachnii-otdih-v-20-vere/',
      },
    ],
  });

  const initialState = {
    news: [
      {
        id: 777,
        publication_date: 158894234,
        title: 'Москва',
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
    ],
    favorite: [],
  };

  const newState = newsReducer(initialState, action);
  expect(newState.news).toEqual([
    {
      id: 777,
      publication_date: 158894234,
      title: 'Москва',
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

it('shold be added new favorite', () => {
  const action = addFavorite({
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
  });

  const newState = newsReducer(undefined, action);

  expect(newState.favorite).toEqual([
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

it('shold be remove same favorite', () => {
  const action = addFavorite({
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
  });

  const initialState = {
    news: [],
    favorite: [
      {
        id: 777,
        publication_date: 158894234,
        title: 'Москва',
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
    ],
  };

  const newState = newsReducer(initialState, action);

  expect(newState.favorite).toEqual([
    {
      id: 777,
      publication_date: 158894234,
      title: 'Москва',
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
