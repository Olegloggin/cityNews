import * as api from './api';

export const getNewsType = {
  getNewsSuccessful: 'getNewsSuccessful',
  getTopNewsSuccessful: 'getTopNewsSuccessful',
};

export const getNewsAction = (page, city) => dispatch => {
  dispatch(api.getListNews(page, city))
    .then(dataRequest => {
      if (page === 1) {
        return dispatch(getTopNewsSuccessful(dataRequest));
      } else {
        dispatch(getNewsSuccessful(dataRequest));
      }
    })
    .catch(e => {});
};

const getNewsSuccessful = news => ({
  type: getNewsType.getNewsSuccessful,
  payload: news,
});

const getTopNewsSuccessful = news => ({
  type: getNewsType.getTopNewsSuccessful,
  payload: news,
});
